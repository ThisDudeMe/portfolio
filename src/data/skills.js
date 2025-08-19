import { programmingIcons, toolIcons, socialIcons } from './icons';

export const skillsData = [
    {
        category: "Frontend Development",
        skills: [
            { name: "HTML5", icon: programmingIcons.html },
            { name: "CSS3", icon: programmingIcons.css },
            { name: "JavaScript", icon: programmingIcons.javascript },
            { name: "JSX", icon: programmingIcons.jsx },
            { name: "React", icon: toolIcons.react }
        ]
    },
    {
        category: "Backend Development",
        skills: [
            { name: "Python", icon: programmingIcons.python },
            { name: "C#", icon: programmingIcons.csharp },
            { name: "Node.js", icon: programmingIcons.javascript },
            { name: "SQL", icon: programmingIcons.sql },
            { name: "Django", icon: toolIcons.django },
            { name: "Flask", icon: toolIcons.flask }
        ]
    },
    {
        category: "Databases & APIs",
        skills: [
            { name: "MySQL", icon: toolIcons.mysql },
            { name: "SQLite", icon: toolIcons.sqlite },
            { name: "Postman", icon: toolIcons.postman },
            { name: "RESTful APIs", icon: programmingIcons.javascript }
        ]
    },
    {
        category: "Game Development",
        skills: [
            { name: "Unity", icon: toolIcons.unity },
            { name: "Unreal Engine", icon: toolIcons.unrealEngine },
            { name: "Unity C#", icon: programmingIcons.csharp }
        ]
    },
    {
        category: "Tools & Technologies",
        skills: [
            { name: "Docker", icon: toolIcons.docker },
            { name: "Git/GitHub", icon: socialIcons.github },
            { name: "VS Code", icon: toolIcons.visualStudio },
            { name: "DaVinci Resolve", icon: toolIcons.davinciResolve }
        ]
    },
    {
        category: "AI & Machine Learning",
        skills: [
            { name: "TensorFlow", icon: programmingIcons.python },
            { name: "PyTorch", icon: programmingIcons.python },
            { name: "Scikit-learn", icon: programmingIcons.python },
            { name: "Data Analysis", icon: programmingIcons.python }
        ]
    }
];

export default skillsData;