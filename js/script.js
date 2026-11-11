const navbar = document.querySelector(".navbar");
const menuButton = document.getElementById("menuButton");

function setMenu(open) {
    navbar.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", function() {
    setMenu(!navbar.classList.contains("menu-open"));
});

document.addEventListener("click", function(event) {
    if (!navbar.contains(event.target)) {
        setMenu(false);
    }
});

window.matchMedia("(min-width: 651px)").addEventListener("change", function(event) {
    if (event.matches) {
        setMenu(false);
    }
});


/* PROJECTS (home page and what we do page) — the data lives in js/projects.js */

const projectDialog = document.getElementById("projectDialog");

if (projectDialog && typeof REACH_PROJECTS !== "undefined") {
    const projectDialogImage = document.getElementById("projectDialogImage");
    const projectDialogGallery = document.getElementById("projectDialogGallery");
    const projectDialogTitle = document.getElementById("projectDialogTitle");
    const projectDialogDescription = document.getElementById("projectDialogDescription");
    const projectDialogReport = document.getElementById("projectDialogReport");
    const projectDialogStatus = document.getElementById("projectDialogStatus");
    const projectDialogDonate = document.getElementById("projectDialogDonate");
    const projectDialogPrevious = document.getElementById("projectDialogPrevious");
    const projectDialogNext = document.getElementById("projectDialogNext");
    const imageFolder = "images/projects/";
    let currentProject = null;
    let currentImage = 0;

    function element(tag, className, text) {
        const node = document.createElement(tag);

        if (className) {
            node.className = className;
        }

        if (text) {
            node.textContent = text;
        }

        return node;
    }

    function projectsOf(area) {
        return REACH_PROJECTS.filter(function(project) {
            return project.area === area;
        }).sort(function(first, second) {
            return second.sort.localeCompare(first.sort);
        });
    }

    /* Shows photo number "index" of the open project; going past the last one starts again. */
    function showImage(index) {
        const images = currentProject.images;

        currentImage = (index + images.length) % images.length;
        projectDialogImage.src = imageFolder + images[currentImage];
        projectDialogImage.alt = currentProject.title + ", photo " + (currentImage + 1) + " of " + images.length;

        Array.from(projectDialogGallery.children).forEach(function(thumbnail, thumbnailIndex) {
            thumbnail.classList.toggle("active", thumbnailIndex === currentImage);

            if (thumbnailIndex === currentImage) {
                projectDialogGallery.scrollLeft = thumbnail.offsetLeft - projectDialogGallery.offsetLeft - 6;
            }
        });
    }

    function openProject(project) {
        const ongoing = project.status === "ongoing";
        const facts = element("dl", "report-facts");

        [["Date", project.date], ["Location", project.location], ["Who we reached", project.beneficiaries]].forEach(function(fact) {
            if (fact[1]) {
                const group = element("div");

                group.append(element("dt", "", fact[0]), element("dd", "", fact[1]));
                facts.append(group);
            }
        });

        projectDialogReport.replaceChildren(facts);

        project.body.forEach(function(block) {
            projectDialogReport.append(block.heading ? element("h3", "", block.heading) : element("p", "", block));
        });

        projectDialogGallery.replaceChildren();

        if (project.images.length > 1) {
            project.images.forEach(function(file, index) {
                const thumbnail = element("button", "project-dialog-thumbnail");
                const image = element("img");

                thumbnail.type = "button";
                thumbnail.setAttribute("aria-label", "Show photo " + (index + 1));
                image.src = imageFolder + file;
                image.alt = "";
                thumbnail.append(image);
                thumbnail.addEventListener("click", function() {
                    showImage(index);
                });
                projectDialogGallery.append(thumbnail);
            });
        }

        projectDialogGallery.hidden = project.images.length < 2;
        projectDialogPrevious.hidden = project.images.length < 2;
        projectDialogNext.hidden = project.images.length < 2;
        currentProject = project;
        showImage(0);

        projectDialogTitle.textContent = project.title;
        projectDialogDescription.textContent = project.summary;
        projectDialogStatus.textContent = ongoing ? "Ongoing project" : "Finished project";
        projectDialogStatus.classList.toggle("ongoing", ongoing);
        projectDialogDonate.hidden = !ongoing;

        projectDialog.showModal();
        projectDialog.scrollTop = 0;
    }

    function projectCard(project) {
        const card = element("button", "project-card");
        const imageBox = element("span", "project-image");
        const image = element("img");
        const content = element("span", "project-content");

        card.type = "button";
        image.src = imageFolder + (project.card || project.images[0]);
        image.alt = "";
        image.loading = "lazy";
        imageBox.append(image);

        if (project.status === "ongoing") {
            imageBox.append(element("span", "project-badge", "Ongoing"));
        }

        content.append(element("strong", "", project.title), element("span", "", project.summary));
        card.append(imageBox, content);
        card.addEventListener("click", function() {
            openProject(project);
        });

        return card;
    }

    /* The last card of a category on the home page: links to that area's full list.
       Its photo is the last photo of the first project in that category. */
    function seeMoreCard(area, areaName, project) {
        const card = element("a", "project-card see-more");
        const imageBox = element("span", "project-image");
        const image = element("img");
        const content = element("span", "project-content");

        card.href = "what-we-do.html#" + area;
        image.src = imageFolder + project.images[project.images.length - 1];
        image.alt = "";
        image.loading = "lazy";
        imageBox.append(image, element("span", "see-more-plus", "+"));
        content.append(element("strong", "", "See more"), element("span", "", "All " + areaName + " projects"));
        card.append(imageBox, content);

        return card;
    }

    /* Every element with data-projects="<area>" is filled with that area's projects.
       data-limit="4" shows the first four followed by a "See More" tile. */
    document.querySelectorAll("[data-projects]").forEach(function(container) {
        const area = container.dataset.projects;
        const projects = projectsOf(area);
        const limit = Number(container.dataset.limit) || projects.length;

        projects.slice(0, limit).forEach(function(project) {
            container.append(projectCard(project));
        });

        if (container.dataset.limit && projects.length) {
            const heading = container.closest(".category").querySelector("h3");

            container.append(seeMoreCard(area, heading.textContent, projects[0]));
        }
    });

    projectDialogPrevious.addEventListener("click", function() {
        showImage(currentImage - 1);
    });

    projectDialogNext.addEventListener("click", function() {
        showImage(currentImage + 1);
    });

    projectDialog.addEventListener("keydown", function(event) {
        if (currentProject.images.length < 2) {
            return;
        }

        if (event.key === "ArrowLeft") {
            showImage(currentImage - 1);
        } else if (event.key === "ArrowRight") {
            showImage(currentImage + 1);
        }
    });

    projectDialog.addEventListener("click", function(event) {
        if (event.target === projectDialog) {
            projectDialog.close();
        }
    });

    /* Images load after the page jumps to an area, so jump again once they are in. */
    if (location.hash && document.getElementById(location.hash.slice(1))) {
        window.addEventListener("load", function() {
            document.getElementById(location.hash.slice(1)).scrollIntoView();
        });
    }
}


/* VIDEO DIALOG (what we do page) */

const videoDialog = document.getElementById("videoDialog");

if (videoDialog) {
    const videoPlayer = document.getElementById("videoPlayer");

    document.getElementById("videoOpen").addEventListener("click", function() {
        videoDialog.showModal();
        videoPlayer.currentTime = 0;
        videoPlayer.play();
    });

    videoDialog.addEventListener("close", function() {
        videoPlayer.pause();
    });

    videoDialog.addEventListener("click", function(event) {
        if (event.target === videoDialog) {
            videoDialog.close();
        }
    });
}


/* DONATION FORM (take action page) */

const donationForm = document.getElementById("donate");

if (donationForm) {
    const steps = Array.from(donationForm.querySelectorAll(".form-step"));
    const amountOptions = Array.from(donationForm.querySelectorAll('input[name="amount"]'));
    const ownAmountToggle = document.getElementById("ownAmountToggle");
    const ownAmount = document.getElementById("ownAmount");
    const donationSummary = document.getElementById("donationSummary");
    const donationSuccess = document.getElementById("donationSuccess");
    const donationSuccessText = document.getElementById("donationSuccessText");
    let currentStep = 0;

    function showStep(index) {
        currentStep = index;

        steps.forEach(function(step, stepIndex) {
            step.hidden = stepIndex !== index;
        });

        if (index === steps.length - 1) {
            donationSummary.textContent = "You're donating " + donationText() + ".";
        }

        steps[index].querySelector(".form-step-title").focus({ preventScroll: true });
        donationForm.scrollIntoView({ block: "nearest" });
    }

    function stepIsValid(step) {
        const invalidField = Array.from(step.querySelectorAll("input")).find(function(field) {
            return !field.checkValidity();
        });

        if (invalidField) {
            invalidField.reportValidity();
            return false;
        }

        return true;
    }

    function nextStep() {
        if (stepIsValid(steps[currentStep])) {
            showStep(currentStep + 1);
        }
    }

    function donationText() {
        const data = new FormData(donationForm);
        const amount = Number(ownAmountToggle.checked ? ownAmount.value : data.get("amount"));

        return "₱" + amount.toLocaleString("en-PH") + " (" + String(data.get("frequency")).toLowerCase() + ")";
    }

    ownAmountToggle.addEventListener("change", function() {
        const own = ownAmountToggle.checked;

        amountOptions.forEach(function(option) {
            option.disabled = own;

            if (own) {
                option.checked = false;
            }
        });

        ownAmount.disabled = !own;
        ownAmount.required = own;

        if (own) {
            ownAmount.focus();
        } else {
            ownAmount.value = "";
        }
    });

    donationForm.addEventListener("click", function(event) {
        if (event.target.closest("[data-next]")) {
            nextStep();
        } else if (event.target.closest("[data-back]")) {
            showStep(currentStep - 1);
        }
    });

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (currentStep < steps.length - 1) {
            nextStep();
            return;
        }

        if (!stepIsValid(steps[currentStep])) {
            return;
        }

        const data = new FormData(donationForm);

        donationSuccessText.textContent = "Thank you, " + String(data.get("firstName")).trim() +
            "! Your " + donationText() + " donation with reference ID " +
            String(data.get("referenceId")).trim() + " has been submitted.";

        steps.forEach(function(step) {
            step.hidden = true;
        });

        donationSuccess.hidden = false;
        donationSuccess.focus({ preventScroll: true });
        donationForm.scrollIntoView({ block: "nearest" });
    });
}


/* CONTACT FORM (contact page) — opens the visitor's email app with the message filled in */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const contactSuccess = document.getElementById("contactSuccess");
    const contactMessage = document.getElementById("contactMessage");
    const contactCounter = document.getElementById("contactCounter");

    contactMessage.addEventListener("input", function() {
        contactCounter.textContent = contactMessage.value.length + " / " + contactMessage.maxLength;
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const data = new FormData(contactForm);
        const phone = String(data.get("phone")).trim();
        const subject = "[" + data.get("subject") + "] Message from the website";
        const body = String(data.get("message")).trim() + "\n\n" +
            (phone ? "Phone: " + phone + "\n" : "") + "Email: " + String(data.get("email")).trim();
        const link = "mailto:" + contactForm.dataset.email +
            "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        document.getElementById("contactMailLink").href = link;
        document.getElementById("contactFields").hidden = true;
        document.getElementById("contactSubmit").hidden = true;
        contactSuccess.hidden = false;
        contactSuccess.focus({ preventScroll: true });

        window.location.href = link;
    });
}
