export const getNavData = () => {
    return ["Home", "Experience", "Photos", "Contact"];
}

export const getHeaderData = () => {
    return {
        img: "me.png",
        title: "Hello, I'm Jaleel",
        subtitle: "My home is Brooklyn, Newyork"
    };
}

export const getCardData = () => {
    return [
        {
            title: "Background",
            textOne: ` I’m an aspiring web designer who loves everything about the web. I've lived in lots of different places and have worked in lots of different jobs. I’m excited to bring my life experience to the process of building fantastic looking websites.`,
            skills: false,
            textTwo:  ` I’ve been a professional cook and gardener and am a life-long learner who's always interested in expanding my skills.`
        },
        {
            title: "Goals",
            textOne: "I want to master the process of building web sites and increase my knowledge, skills and abilities in:",
            skills: true,
            textTwo: "I’d like to work for a web design firm helping clients create an impressive online presence"
        }
    ]
}


export const getSkillsData = () => {
    return [
        "HTML",
        "CSS",
        "JavaScript",
        "Ruby",
        "Rails"
    ];
}



export const getFooterData = () => {
    return {
        images: ["twitter.svg", "linkedin.svg", "github.svg"],
        text: "Copyright 2020, Jaleel Bluspear"
    }
}