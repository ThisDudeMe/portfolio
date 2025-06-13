import React from 'react';

// Programming Languages
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry, SiUnrealengine, SiDavinciresolve, SiSqlite, SiMysql, SiFlask, SiPostman } from "react-icons/si";
import { FaPython, FaJs, FaReact, FaUnity, FaDocker, FaGithub, FaLinkedin, FaInfoCircle, FaPhoneSquare } from "react-icons/fa";
import { TbBrandCSharp, TbBrandDjango, TbFileCv } from "react-icons/tb";
import { BsFiletypeJsx } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiVisualstudio } from "react-icons/di";

// Navigation & Contact
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

// Programming Language Icons
export const programmingIcons = {
    html: <TiHtml5 />,
    css: <SiCsswizardry />,
    python: <FaPython />,
    csharp: <TbBrandCSharp />,
    javascript: <FaJs />,
    jsx: <BsFiletypeJsx />,
    sql: <AiOutlineConsoleSql />,
};

// Framework & Tool Icons
export const toolIcons = {
    unrealEngine: <SiUnrealengine />,
    react: <FaReact />,
    unity: <FaUnity />,
    davinciResolve: <SiDavinciresolve />,
    visualStudio: <DiVisualstudio />,
    sqlite: <SiSqlite />,
    mysql: <SiMysql />,
    flask: <SiFlask />,
    postman: <SiPostman />,
    django: <TbBrandDjango />,
    docker: <FaDocker />,
};

// Social & Contact Icons
export const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    email: <MdEmail />,
    resume: <TbFileCv />,
};

// Navigation & UI Icons
export const navigationIcons = {
    home: <IoHome />,
    about: <FaInfoCircle />,
    contact: <LuContact />,
    projects: <GrProjects />,
    location: <FaLocationDot />,
    phone: <FaPhoneSquare />,
};

// Icon metadata for IconShowcase
export const iconMetadata = {
    // Programming Languages
    html: { icon: <TiHtml5 />, name: "TiHtml5" },
    css: { icon: <SiCsswizardry />, name: "SiCsswizardry" },
    python: { icon: <FaPython />, name: "FaPython" },
    csharp: { icon: <TbBrandCSharp />, name: "TbBrandCSharp" },
    javascript: { icon: <FaJs />, name: "FaJs" },
    jsx: { icon: <BsFiletypeJsx />, name: "BsFiletypeJsx" },
    sql: { icon: <AiOutlineConsoleSql />, name: "AiOutlineConsoleSql" },

    // Frameworks & Tools
    unrealEngine: { icon: <SiUnrealengine />, name: "SiUnrealengine" },
    react: { icon: <FaReact />, name: "FaReact" },
    unity: { icon: <FaUnity />, name: "FaUnity" },
    davinciResolve: { icon: <SiDavinciresolve />, name: "SiDavinciresolve" },
    visualStudio: { icon: <DiVisualstudio />, name: "DiVisualstudio" },
    sqlite: { icon: <SiSqlite />, name: "SiSqlite" },
    mysql: { icon: <SiMysql />, name: "SiMysql" },
    flask: { icon: <SiFlask />, name: "SiFlask" },
    postman: { icon: <SiPostman />, name: "SiPostman" },
    django: { icon: <TbBrandDjango />, name: "TbBrandDjango" },
    docker: { icon: <FaDocker />, name: "FaDocker" },

    // Social & Contact
    github: { icon: <FaGithub />, name: "FaGithub" },
    linkedin: { icon: <FaLinkedin />, name: "FaLinkedin" },
    email: { icon: <MdEmail />, name: "MdEmail" },
    resume: { icon: <TbFileCv />, name: "TbFileCv" },

    // Navigation & UI
    home: { icon: <IoHome />, name: "IoHome" },
    about: { icon: <FaInfoCircle />, name: "FaInfoCircle" },
    contact: { icon: <LuContact />, name: "LuContact" },
    projects: { icon: <GrProjects />, name: "GrProjects" },
    location: { icon: <FaLocationDot />, name: "FaLocationDot" },
    phone: { icon: <FaPhoneSquare />, name: "FaPhoneSquare" },
};

// All icons grouped by category for the showcase component
export const iconSets = [
    {
        title: "Programming Languages",
        icons: [
            iconMetadata.html,
            iconMetadata.css,
            iconMetadata.python,
            iconMetadata.csharp,
            iconMetadata.javascript,
            iconMetadata.jsx,
            iconMetadata.sql,
        ]
    },
    {
        title: "Frameworks & Tools",
        icons: [
            iconMetadata.unrealEngine,
            iconMetadata.react,
            iconMetadata.unity,
            iconMetadata.davinciResolve,
            iconMetadata.visualStudio,
            iconMetadata.sqlite,
            iconMetadata.mysql,
            iconMetadata.flask,
            iconMetadata.postman,
            iconMetadata.django,
            iconMetadata.docker,
        ]
    },
    {
        title: "Contact & Social",
        icons: [
            iconMetadata.github,
            iconMetadata.linkedin,
            iconMetadata.email,
            iconMetadata.resume,
        ]
    },
    {
        title: "Navigation & UI",
        icons: [
            iconMetadata.home,
            iconMetadata.about,
            iconMetadata.contact,
            iconMetadata.projects,
            iconMetadata.location,
            iconMetadata.phone,
        ]
    }
];

export default {
    programmingIcons,
    toolIcons,
    socialIcons,
    navigationIcons,
    iconMetadata,
    iconSets
};

