import userIcon from '../assets/userIcon.svg'
import alumniIcon from '../assets/alumniIcon.svg'
import companyIcon from '../assets/companyIcon.svg'
import jobIcon from '../assets/jobIcon.svg'

export const TopJobs = [
    {
        id: 0,
        position: "Web Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 1,
        position: "Full Stack Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 2,
        position: "Java Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 3,
        position: "Frontend Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 4,
        position: "Backend Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 5,
        position: "Mobile Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 6,
        position: "Web Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 7,
        position: "Web Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 8,
        position: "Web Developer",
        hired: 100,
        slot: 50
    },
    {
        id: 9,
        position: "Web Developer",
        hired: 100,
        slot: 50
    },

]

export const chartBoxUsers = {
    color: "#8884d8",
    icon: userIcon,
    title: "Total Users",
    number: "sumOfUsers",
    link: "/dashboard",
    dataKey: "users",
    percentage: 100,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
};

export const chartBoxAlumni = {
    color: "skyblue",
    icon: alumniIcon,
    title: "Total Alumni",
    number: "238",
    link: "/alumni",
    dataKey: "alumni",
    percentage: 21,
    chartData: [
        { name: "Sun", alumni: 400 },
        { name: "Mon", alumni: 600 },
        { name: "Tue", alumni: 500 },
        { name: "Wed", alumni: 700 },
        { name: "Thu", alumni: 400 },
        { name: "Fri", alumni: 500 },
        { name: "Sat", alumni: 450 },
    ],
};

export const chartBoxCompanies = {
    color: "gold",
    icon: companyIcon,
    title: "Total Companies",
    number: "263",
    link: "/companies",
    dataKey: "companies",
    percentage: 12,
    chartData: [
        { name: "Sun", companies: 400 },
        { name: "Mon", companies: 600 },
        { name: "Tue", companies: 500 },
        { name: "Wed", companies: 700 },
        { name: "Thu", companies: 400 },
        { name: "Fri", companies: 500 },
        { name: "Sat", companies: 450 },
    ],
};

export const chartBoxJobs = {
    color: "teal",
    icon: jobIcon,
    title: "Total Job Posts Active and Inactive",
    number: "1052",
    link: "/jobs",
    dataKey: "jobs",
    percentage: 58,
    chartData: [
        { name: "Sun", jobs: 400 },
        { name: "Mon", jobs: 600 },
        { name: "Tue", jobs: 500 },
        { name: "Wed", jobs: 700 },
        { name: "Thu", jobs: 400 },
        { name: "Fri", jobs: 500 },
        { name: "Sat", jobs: 450 },
    ],
};
