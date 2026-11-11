/*
    PROJECT DATA
    Every project shown on the home page and on What We Do comes from this file.

    area:          "health", "education", "livelihood", "environment" or "care"
                   (matches a data-projects="..." container in index.html and what-we-do.html)
    status:        "ongoing" (shows the donate button) or "finished"
    date:          shown in the dialog; also used for sorting through "sort" (YYYY-MM-DD)
    location,
    beneficiaries: optional facts shown in the dialog
    summary:       short text on the card
    body:          paragraphs for the dialog; { heading: "..." } adds a sub-heading
    images:        file names inside images/projects/, shown whole in the dialog
    card:          the photo on the card: a 3:2 cut-out (1200 x 800 px is ideal) inside images/projects/.
                   Leave it out to use the first of "images", which is then trimmed to fit.
*/

const REACH_PROJECTS = [

    /* HEALTH & WELLNESS */

    {
        title: "Tungkod ng Pag-asa",
        area: "health",
        status: "finished",
        date: "August 22, 2025",
        sort: "2025-08-22",
        location: "Barangay Poblacion Sur, Rizal, Nueva Ecija",
        beneficiaries: "A senior citizen with a disability",
        summary: "A walking cane for a senior citizen who has difficulty in walking.",
        body: [
            "On August 22, 2025, REACH Cares together with the President of Senior Citizens Association of Barangay Poblacion Sur distributed a walking cane for a disabled senior citizen who has difficulty in walking.",
            "It may be a small thing, but it brings great comfort and support to his everyday life."
        ],
        images: ["tungkod-2.jpg", "tungkod-1.jpg"],
        card: "cards/tungkod-2.jpg"
    },
    {
        title: "Canes for our fellow Rizaleños",
        area: "health",
        status: "finished",
        date: "September 13, 2025",
        sort: "2025-09-13",
        location: "Various barangays in the Municipality of Rizal",
        summary: "Each cane represents more than just physical support. It is a symbol of hope.",
        body: [
            "On September 13, 2025, REACH Cares distributed canes to our fellow Rizaleños across various barangays in the Municipality of Rizal. Each cane represents more than just physical support—it is a symbol of hope!",
            "Through this simple cane, we continue to demonstrate our compassion and care for our community. Our goal is not only to provide assistance but also to offer inspiration and encouragement, letting our fellow citizens know that there are helping hands and caring hearts ready to reach out."
        ],
        images: ["canes-1.jpg", "canes-2.jpg", "canes-3.jpg", "canes-4.jpg"],
        card: "cards/canes-1.jpg"
    },
    {
        title: "Visit to Helping Hands Healing Hearts Ministries",
        area: "health",
        status: "finished",
        date: "August 30, 2025",
        sort: "2025-08-30",
        beneficiaries: "Children in need of medical care and temporary shelter",
        summary: "A visit to a safe home and recovery center for children.",
        body: [
            "On August 30, 2025, we visited Helping Hands Healing Hearts Ministries Philippines, a safe home and recovery center for children in need of medical care and temporary shelter.",
            "Along with bringing some goods, we also explored ways on how REACH Cares can further support the kids in their care."
        ],
        images: ["helping-1.jpg"],
        card: "cards/helping-1.jpg"
    },

    /* EDUCATION & LEARNING */

    {
        title: "Guhit Pangarap",
        area: "education",
        status: "ongoing",
        date: "Flagship project",
        sort: "9999-02",
        beneficiaries: "Children who need school supplies most",
        summary: "School supplies for children who need them most.",
        body: [
            "To give school supplies to children who need it most. For us, education is not a privilege, it is a right of every child. A single pencil can start a dream, and every notebook can be a start of a new chapter.",
            "To make this happen, we aim to gather donations or partnerships from private groups/sectors. One child helped is one future made brighter. We know we cannot give to all, but for every child we reach, we plant a better future."
        ],
        images: ["guhit-1.jpg", "guhit-2.jpg"],
        card: "cards/guhit-1.jpg"
    },
    {
        title: "Tanim Karunungan, Ani Kalusugan",
        area: "education",
        status: "finished",
        date: "August 7, 2025",
        sort: "2025-08-07",
        location: "Nambabacalan Child Development Center, Brgy. General Luna, Rizal, Nueva Ecija",
        beneficiaries: "21 learners of the daycare center",
        summary: "Learning booklets and vegetable seedlings for daycare learners.",
        body: [
            "In celebration of the International Youth Day declared by the United Nations every August 12, the project aims to empower young learners and their families through education and sustainable practices.",
            "The activity will focus on providing learning booklets to daycare students and planting vegetable seedlings. This initiative supports the Sustainable Development Goals (SDGs), particularly SDG 2: Zero Hunger and SDG 4: Quality Education, by promoting literacy and instilling the value of food security at an early age."
        ],
        images: ["tanim-1.jpg", "tanim-2.jpg", "tanim-5.jpg", "tanim-3.jpg", "tanim-4.jpg", "tanim-6.jpg"],
        card: "cards/tanim-1.jpg"
    },
    {
        title: "100 books and 400 organic soaps",
        area: "education",
        status: "finished",
        date: "December 20, 2025",
        sort: "2025-12-20",
        beneficiaries: "The youth of the Municipality of Rizal, Nueva Ecija",
        summary: "A donation from the University of the Cordilleras through Project H.E.L.E.N.",
        body: [
            { heading: "SDG #17: Partnership for the Goals" },
            "On December 20, 2025, REACH Cares proudly received 100 books and 400 organic soaps from the University of the Cordilleras through their Corporate Social Responsibility arm, Project H.E.L.E.N.",
            "This generous support strengthens our mission to empower the youth of Municipality of Rizal, Nueva Ecija, providing not only essential educational materials but also promoting health and well-being in our communities. True progress is built when organizations and communities work together, and this day is an example of what partnership can achieve."
        ],
        images: ["books-1.jpg"],
        card: "cards/books-1.jpg"
    },
    {
        title: "IGNITE 2025: Youth Leaders Bootcamp",
        area: "education",
        status: "finished",
        date: "December 27, 2025",
        sort: "2025-12-27",
        location: "Dento Farm Resort, Rizal, Nueva Ecija",
        summary: "LYDC Mandatory Training for young leaders from different sectors.",
        body: [
            "December 27, 2025 | REACH Cares successfully participated in the LYDC Mandatory Training held at Dento Farm Resort, Rizal, Nueva Ecija. The activity gathered young leaders from different sectors to strengthen their knowledge in youth leadership fundamentals, purpose-driven organizing, and effective communication through interactive and high-energy sessions.",
            "We extend our sincere gratitude to Hon. Katrina L. Andres, Municipal Mayor of Rizal, Nueva Ecija, and to LVRAGE Events, Training and Business Solutions for spearheading IGNITE 2025: Youth Leaders Bootcamp.",
            "This meaningful training empowered the youth to move with passion, lead with purpose, and help build stronger communities for the future of Rizal."
        ],
        images: ["ignite-1.jpg", "ignite-2.jpg"],
        card: "cards/ignite-1.jpg"
    },

    /* LIVELIHOOD & SKILLS */

    {
        title: "IndigeNEWS: Service with Heart for the Indigenous People",
        area: "livelihood",
        status: "finished",
        date: "August 15, 2025",
        sort: "2025-08-15",
        location: "Barangay Villa Labrador, Rizal, Nueva Ecija",
        beneficiaries: "25 Indigenous People beneficiaries",
        summary: "AICS payout for our Aeta brothers and sisters, in partnership with DSWD.",
        body: [
            "On August 15, 2025, in partnership with DSWD Nueva Ecija, the Assistance to Individuals in Crisis Situations (AICS) payout was successfully conducted for our Aeta brothers and sisters in Barangay Villa Labrador, Rizal, Nueva Ecija. A total of 25 IP beneficiaries received aid. This assistance is focused on supporting their livelihood and daily needs, as a step to bring government programs closer to the people, especially to the Indigenous Peoples.",
            "Through the collaboration of REACH Cares with DSWD Field Office 3 - Central Luzon, and the Municipality of Rizal, Nueva Ecija, it has once again been proven that when the national government, local government, and small organizations unite, more Filipino families are able to receive help. We will act and serve for the welfare of everyone—a service with heart, for every Rizaleño."
        ],
        images: ["aics-1.jpg", "aics-2.jpg", "aics-3.jpg"],
        card: "cards/aics-1.jpg"
    },
    {
        title: "Vegetable seedlings for Aeta families",
        area: "livelihood",
        status: "finished",
        date: "October 4, 2025",
        sort: "2025-10-04",
        location: "Villa Labrador, Rizal, Nueva Ecija",
        beneficiaries: "Aeta Indigenous People (IP) beneficiaries",
        summary: "Promoting food security and sustainable livelihood opportunities.",
        body: [
            "October 4, 2025 | In August 2025, REACH Cares distributed vegetable seedlings to our Aeta Indigenous People (IP) beneficiaries in Villa Labrador, Rizal, Nueva Ecija, with the goal of promoting food security and sustainable livelihood opportunities. The project was implemented not only to provide immediate nutritional benefits but also to empower the community to cultivate crops they can consume and sell in the market. As the saying goes, “Those who plant shall reap.”",
            "This progress serves as a testament that even the smallest acts of assistance and planting can yield significant rewards. Through this project, we aim to educate the Indigenous people and inspire our partners, reinforcing the value of planting, nurturing, and sustaining growth, not only in crops but also in hope, love, and community development."
        ],
        images: ["seedlings-1.jpg", "seedlings-3.jpg", "seedlings-2.jpg"],
        card: "cards/seedlings-1.jpg"
    },

    /* ENVIRONMENT & SUSTAINABILITY */

    {
        title: "Gulayan sa Paaralan/Daycare",
        area: "environment",
        status: "finished",
        date: "August 15, 2025",
        sort: "2025-08-15",
        beneficiaries: "Selected schools and daycare centers",
        summary: "Vegetable seedlings for selected schools and daycare centers.",
        body: [
            "On August 15, 2025, we happily distributed vegetable seedlings to selected schools and daycare centers in support of the Gulayan sa Paaralan/Daycare program.",
            "These seedlings provide opportunities for healthier meals and additional knowledge in farming for our young Rizaleños.",
            "This initiative is aligned with UN SDG #12 (Responsible Consumption and Production), SDG #13 (Climate Action), and SDG #15 (Life on Land). Through simple planting, we help nature, provide food, and inspire children to love and care for our environment."
        ],
        images: ["gulayan-1.jpg", "gulayan-2.jpg", "gulayan-3.jpg", "gulayan-4.jpg"],
        card: "cards/gulayan-1.jpg"
    },
    {
        title: "Central Luzon State University × REACH Cares",
        area: "environment",
        status: "finished",
        date: "August 20, 2025",
        sort: "2025-08-20",
        summary: "A courtesy call and donations turnover with the CLSU University Business Affairs Program.",
        body: [
            "On August 20, 2025, a meaningful courtesy call and donations turnover with the CLSU University Business Affairs Program, led by Vice President for Business Affairs, Dr. Karenina B. Romualdo, and warmly welcomed by Director Jaypee H. Estigoy together with program managers. This partnership with the prestigious Central Luzon State University (CLSU) marks the beginning of more impactful projects ahead — including our upcoming Tree Planting Activity.",
            "Together, we move forward in building sustainable communities, aligned with the United Nations Sustainable Development Goals (SDGs)."
        ],
        images: ["clsu-1.jpg", "clsu-2.jpg", "clsu-3.jpg"],
        card: "cards/clsu-1.jpg"
    },
    {
        title: "REACH Cares in the Town of Laur",
        area: "environment",
        status: "finished",
        date: "August 22, 2025",
        sort: "2025-08-22",
        location: "Barangay San Juan, Laur, Nueva Ecija",
        summary: "Fruit-bearing trees and vegetable seedlings as a commitment to a greener future.",
        body: [
            "On August 22, 2025, we met with Mayor Benjamin A. Padilla of Laur, Nueva Ecija for the donation of fruit-bearing trees — a project of REACH Cares in partnership with Central Luzon State University and Kiwanis International Philippines Luzon District Division 2C-1.",
            "The trees will be planted in Barangay San Juan, Laur, Nueva Ecija as a commitment to a greener future.",
            "We went to Brgy. San Juan, Laur, Nueva Ecija on August 22, 2025, where we were warmly welcomed by Captain Fernando C. Domingo, SK Chairperson Shane C. Nierva, and the SK Councilors.",
            "They received the fruit-bearing trees and vegetable seedlings donated by REACH Cares in partnership with Central Luzon State University and Kiwanis International Philippines Luzon District Division 2C-1. Also with us were the Laur MENRO staff under the leadership of MENRO Head Engr. Arvin Fausto and the Laur Public Information Office led by Sir Filip Soriben."
        ],
        images: ["laur-1.jpg", "laur-2.jpg", "laur-3.jpg"],
        card: "cards/laur-1.jpg"
    },
    {
        title: "Tree planting at Rizal National High School",
        area: "environment",
        status: "finished",
        date: "August 29, 2025",
        sort: "2025-08-29",
        location: "Rizal National High School",
        beneficiaries: "Students and faculty members",
        summary: "Fruit-bearing trees that will provide both shade and nourishment for years to come.",
        body: [
            "On August 29, 2025, a fruitful day for nature and community as REACH Cares successfully led a tree planting activity at Rizal National High School. Together with selected students and faculty members, we planted fruit-bearing trees that will provide both shade and nourishment for years to come.",
            "This initiative aligns with the United Nations Sustainable Development Goals. By planting these trees, we hope to inspire others to care for the planet, protect biodiversity, and create a lasting impact that benefits both people and nature."
        ],
        images: ["tree-1.jpg", "tree-2.jpg", "tree-3.jpg"],
        card: "cards/tree-1.jpg"
    },

    /* CARE & NURTURANCE */

    {
        title: "Sibol Katutubo",
        area: "care",
        status: "ongoing",
        date: "Flagship project",
        sort: "9999-03",
        location: "Brgy. Villa Labrador, Rizal and KM 8 Pantabangan, Nueva Ecija",
        beneficiaries: "Aeta community of Pantabangan and Rizal, Nueva Ecija",
        summary: "Planting the seed of hope and growth among our Indigenous brothers and sisters.",
        body: [
            "To support and help indigenous families through their most essential needs, this project aims to plant the seed of hope and growth among our Indigenous brothers and sisters. With each act of kindness, we hope to bring light into their lives even in the simplest ways.",
            { heading: "August 9, 2025: National Indigenous Peoples Day" },
            "In support of Republic Act No. 10689, declaring August 9 of every year as National Indigenous Peoples Day, Project Sibol Katutubo aims to recognize and uplift the lives of our Indigenous brothers and sisters. The Aeta community in Brgy. Villa Labrador, Rizal, Nueva Ecija and KM 8 Pantabangan remains one of the richest in indigenous culture and heritage in the Philippines. This initiative intends to honor their heritage not only through recognition but through assistance and empowerment."
        ],
        images: ["sibol-6.jpg", "sibol-1.jpg", "sibol-2.jpg", "sibol-3.jpg", "sibol-4.jpg", "sibol-5.jpg"],
        card: "cards/sibol-6.jpg"
    },
    {
        title: "Sinag Lingap",
        area: "care",
        status: "ongoing",
        date: "Flagship project",
        sort: "9999-01",
        beneficiaries: "Families and individuals who are struggling",
        summary: "Feeding programs, relief packs, and small acts of kindness.",
        body: [
            "It is our commitment to continue sharing kindness, especially with those who are struggling. Because even a small act can give someone the hope to keep going. Whether there is a calamity or not, we aim to reach families and individuals who are often struggling. Through feeding programs, relief packs, and small acts of kindness.",
            { heading: "Super Typhoon Kristine & Pepito" },
            "We reached out to Brgy. Valle Cruz, Sta. Arcadia, Mabini Extension, and D.S. Garcia in Cabanatuan City and selected affected students of Rizal National High School, Rizal, Nueva Ecija to deliver REACH Packs and nutritious meal to most affected families by the recent calamities.",
            { heading: "Sitio Pada-Pada, Brgy. Sta. Monica, Rizal, Nueva Ecija" },
            "On July 30, 2025, we visited Mrs. Mary Ann to distribute some rice and other essential goods. This simple act of kindness aimed to provide relief and hope to those struggling with daily necessities."
        ],
        images: ["sinag-1.jpg", "sinag-2.jpg", "sinag-3.jpg", "sinag-4.jpg", "sinag-6.jpg", "sinag-5.jpg"],
        card: "cards/sinag-1.jpg"
    },
    {
        title: "National Indigenous Peoples’ Month and a special birthday",
        area: "care",
        status: "finished",
        date: "October 4, 2025",
        sort: "2025-10-04",
        location: "Villa Labrador, Rizal and Kilometer 8, Pantabangan, Nueva Ecija",
        beneficiaries: "Aeta families",
        summary: "A volunteer celebrated her birthday by sharing joy and hope with Aeta families.",
        body: [
            "In honor of National Indigenous Peoples’ Month and the birthday of our dedicated REACH Cares volunteer, Rhian Joyce Ronquillo, our organization reached out to the Aeta families of Villa Labrador, Rizal, Nueva Ecija and Kilometer 8, Pantabangan, Nueva Ecija. Through her inspiring initiative, Rhian celebrated her special day not with extravagance, but with genuine love, compassion, and service.",
            "Instead of a traditional grand celebration, Rhian chose to share joy and hope with our Indigenous Peoples (IP) brothers and sisters. Her selfless act is a reminder that true happiness comes from giving and making a positive impact in the lives of others."
        ],
        images: ["ipmonth-1.jpg", "ipmonth-2.jpg", "ipmonth-3.jpg"],
        card: "cards/ipmonth-1.jpg"
    },
    {
        title: "REACH Cares in Action: Super Typhoon Uwan",
        area: "care",
        status: "finished",
        date: "November 10, 2025",
        sort: "2025-11-10",
        location: "Brgy. Villa Labrador, Rizal, Nueva Ecija",
        beneficiaries: "Evacuees affected by Super Typhoon Uwan",
        summary: "Warm porridge and essential relief items for evacuees.",
        body: [
            "On November 10, 2025, REACH Cares personally delivered immediate assistance to the evacuees of Brgy. Villa Labrador, Rizal, Nueva Ecija, who were severely affected by Super Typhoon Uwan. Our team provided warm porridge and essential relief items, extending both nourishment and comfort to those evacuated from the calamity.",
            "We pray for the safety, resilience, and swift recovery of our fellow Filipinos affected by the typhoon across various parts of the country. REACH Cares remains committed to serving communities in times of need, responding promptly to emergencies with compassion and solidarity."
        ],
        images: ["uwan-1.jpg", "uwan-2.jpg", "uwan-3.jpg", "uwan-4.jpg"],
        card: "cards/uwan-1.jpg"
    },
    {
        title: "Tulong at Ligaya: Pamaskong Handog 2025",
        area: "care",
        status: "finished",
        date: "December 13, 2025",
        sort: "2025-12-13",
        location: "Sitio Dupinga, Brgy. Malinao, Gabaldon, Nueva Ecija",
        beneficiaries: "Children and families of the Domagat–Edimala community",
        summary: "Christmas gift-giving for the children and families of Sitio Dupinga.",
        body: [
            "On December 13, 2025, REACH Cares continues its mission of sharing love, kindness, and hope through gift-giving in Sitio Dupinga, Brgy. Malinao, Gabaldon, Nueva Ecija.",
            "Our Tulong at Ligaya: Pamaskong Handog 2025 is a heartfelt celebration dedicated to the children and families of the Domagat–Edimala community, reminding us of the true spirit of Christmas—giving, unity, and compassion."
        ],
        images: ["pamasko-1.jpg", "pamasko-2.jpg", "pamasko-3.jpg", "pamasko-4.jpg", "pamasko-5.jpg", "pamasko-6.jpg"],
        card: "cards/pamasko-1.jpg"
    },
    {
        title: "A Magical Day with REACH Cares",
        area: "care",
        status: "finished",
        date: "December 29, 2025",
        sort: "2025-12-29",
        location: "Slaughter House Gym, Poblacion Norte, Rizal, Nueva Ecija",
        beneficiaries: "Our community kids",
        summary: "A Magic Show and Games full of smiles and laughter.",
        body: [
            "December 29, 2025 was truly a day full of smiles and laughter as REACH Cares successfully held a Magic Show and Games at the Slaughter House Gym, Poblacion Norte, Rizal, Nueva Ecija. With the generous support of Galing sa Puso (GP) Party List and Mic Mha Clown led by Marlon Diaz, our community kids enjoyed fun-filled activities, exciting games, and amazing magic that sparked joy in every heart.",
            "With the help of our dedicated volunteers, everyone also received free sopas, fishballs, and had a chance to win in the lucky 12 raffle draw. Moments like these remind us that when we come together, we can turn simple acts of service into magical experiences that touch hearts and inspire hope."
        ],
        images: ["magic-1.jpg", "magic-2.jpg"],
        card: "cards/magic-1.jpg"
    }
];
