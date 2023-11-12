// import placeholder from "../assets/placeholder.png";
import heroimage from "../assets/graduate2hero.png";

import alliance from "../assets/company-alliance.png";
import boundless from "../assets/company-boundless.png";
import gcash from "../assets/company-gcash.png";
import ncr from "../assets/company-ncr.png";

import alumni from "../assets/alumnischool.png";

import developer from "../assets/developer.png";
import manager from "../assets/teamlead.png";
import statistician from "../assets/statistician.png"

import partner from "../assets/partner.png";
import gplay from "../assets/google-play-bg.png";

export const homebanner = [
    {
        id: 1,
        img: heroimage,
        alt: "placeholder",
        title: "<h1>Lifelong Learners:<br>Welcome Home!<h1>",
        content:
            "<p>The Department of Computer, Information Sciences, and Mathematics brings you ACES - bridging the gaps between alumni, the department, partnered companies, and interns; building a legacy.</p>",
    },
];

export const company = [
    {
        id: 1,
        img: alliance,
        alt: "Alliance logo"
    },
    {
        id: 2,
        img: boundless,
        alt: "Boundless Immigration logo"
    },
    {
        id: 3,
        img: gcash,
        alt: "G-Cash logo"
    },
    {
        id: 4,
        img: ncr,
        alt: "NCR logo"
    }
]

export const discover = [
    {
        id: 1,
        img: alumni,
        alt: "Alumni walking back to school",
        title: "<h1>Keep in touch with DCISM<h1>",
        content:
            "<p>Help us highlight real-life examples of student outcomes and let us help you find the right opportunities through alumni tracking</p>",
    },
];

export const category = [
    {
        title: "<h1>Find the right job for your skillset<h1>",
        content:
            "Browse through the job openings posted by our reputed partner companies and get recommendations for job postings based on your skills and degree.",

        data: [
            {
                id: 1,
                img: developer,
                title: "Developer",
            },
            {
                id: 2,
                img: manager,
                title: "Management Staff",
            },
            {
                id: 3,
                img: statistician,
                title: "Statistician",
            },
        ],
    },
];

export const learn = [
    {
        id: 1,
        img: partner,
        alt: "Company meeting",
        title: "<h1>Become Our Partner<h1>",
        content:
            "<p>Is your compnay looking to hire competent computer, information science and mathematics graduates or interns? Register as a partner company now!</p>",
    },
];

export const googleplay = [
    {
        id: 1,
        img: gplay,
        alt: "Google Play themed background",
        title: "<h1>Get it on <br>Google Play<h1>",
        content:
            "<p>Install the app on your phone to receive notifications anytime, anywhere!</p>",
    },
];
