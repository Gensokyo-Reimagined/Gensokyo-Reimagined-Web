export default defineAppConfig({
    HeaderLogoImg: '/img/logo.webp',
    //main page -> For the image on the right side of the page header, please put the corresponding image in public/img, and then fill in /img/1.png if the file name is 1.png
    IndexHeaderImg: [
        '/img/main_min.webp',
        '/img/youkaimountain.webp',
        '/img/sunflower.webp',
        '/img/youkaiforest.webp',
        '/img/shop.webp',
        '/img/village.webp',
    ],
    //Image switching time, in milliseconds
    IndexHeaderImgChangeTime: '5000',
    //main page -> Feature Four content icon in front of the class, you can be obtained from https://fontawesome.com/search （We are using the pro version, so please feel free to use pro）
    IndexFeatureIcon: [
        'fa-solid fa-circle-info',
        'fa-solid fa-circle-info',
        'fa-solid fa-circle-info',
        'fa-solid fa-circle-info',
    ],
    IndexAbobutImg: '/img/about_pic.webp',
    //main page -> Feature Four content Img, The method used is similar to that of IndexHeaderImg
    IndexFeatureImg: [
        '/img/mobs.webp',
        '/img/class.webp',
        '/img/quests.webp',
        '/img/season.webp',
    ],
    //main page -> cta Component on the right of the picture. The method used is similar to that of IndexHeaderImg
    DCCtaShow: true,
    IndexCtaImg: '/img/discord-screenshot.webp',
    DCLink: 'https://discord.gg/U9fZSJJcte',

    IPCtaShow: true,
    IndexIPCtaImg: '/img/ipc.webp',
    // main page -> IPcta Component's Server IP context
    BuildServerIP: 'build.gensokyoreimagined.net',
    SurvivalServerIP: 'Under Development',

    MPCtaShow: true,
    IndexModPackCtaImg: '/img/modrinth.webp',
    MPLink: 'https://modrinth.com/modpack/gensokyo-reimagined-qol',

    IndexRulesImg: '/img/minecraft-bookshelf.webp',
    //Links in Navbar support all url formats
    NavBarLinkAbout: '#aboutus',
    NavBarLinkWiki: 'https://wiki.gensokyoreimagined.net/',
    NavBarLinkGithub: 'https://github.com/Gensokyo-Reimagined',
    NavBarLinkMap:
        'https://map.gensokyoreimagined.net/?world=minecraft_overworld',
    NavBarLinkTranslation: 'https://weblate.gensokyoreimagined.net/',
    teamData: [
        {
            name: "Admin",
            //image that resemble rule
            image: "/icons/staff/admin.webp",
            //color that resemble rule
            color: "#ff7a7b",
            list: [
                {
                    name: "Taiyou",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/329733028899323905/f6ec4b92f2556e5ab46c4dedec3fb92a.webp",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Admin",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "qwq",
                        twitter: "qwq",
                        github: "qwq"
                    }
                }
            ]
        },
        {
            name: "Developer",
            //image that resemble rule
            image: "/icons/staff/developer.webp",
            //color that resemble rule
            color: "#22ffb7",
            list: [
                {
                    name: "misaka10843",
                    //url or GitHub username
                    avatar: "misaka10843",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: true,
                    position: "Web Developer",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "qwq",
                        twitter: "qwq",
                        github: "qwq"
                    }
                }, {
                    name: "GensokyoReimaginedWeblate",
                    avatar: "https://avatars.githubusercontent.com/GensokyoReimaginedWeblate",
                    avatarUseGithub: false,
                    position: "Web Developer",
                    contact: {
                        discord: "qwq",
                        twitter: "qwq",
                        github: "qwq"
                    }
                }
            ]
        }
    ]

})
