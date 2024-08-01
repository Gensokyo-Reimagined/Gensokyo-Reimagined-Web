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
            name: "Project Leads",
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
                    position: "Admin/Project Manager",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "taiyouh",
                        github: "https://github.com/Taiyou06"
                    }
                },
                {
                    name: "ruby",
                    avatar: "rubiline",
                    avatarUseGithub: true,
                    position: "Design Lead",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "yellowcakebunny",
                        github: "https://github.com/rubiline"
                    }
                },
                {
                    name: "jellyfly",
                    avatar: "https://cdn.discordapp.com/avatars/263101964676628480/5a1b2b673fb2119182acc17a291bf61c.png?size=512",
                    avatarUseGithub: false,
                    position: "Build Lead",
                    contact: {
                        discord: "jellyfly",
                    }
                },
                {
                    name: "Momo",
                    avatar: "https://cdn.discordapp.com/avatars/336133038868004864/1ba084772c28df71ba924719d7bf3dd9.png?size=512",
                    avatarUseGithub: false,
                    position: "Build Lead",
                    contact: {
                        discord: "thestupendousmomo",
                    }
                }
            ]
        },
        {
            name: "Developers",
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
                        discord: "yoruchinatsuki",
                        github: "https://github.com/misaka10843"
                    }
                },
                {
                    name: "Atliami",
                    avatar: "yoshiweegee",
                    avatarUseGithub: true,
                    position: "Developer",
                    contact: {
                        discord: "altiami",
                        twitter: "https://x.com/Altiamie",
                        github: "https://github.com/yoshiweegee"
                    }
                },
                {
                    name: "DoggySazHi",
                    avatar: "DoggySazHi",
                    avatarUseGithub: true,
                    position: "Developer",
                    contact: {
                        discord: "doggysazhi",
                        github: "https://github.com/DoggySazHi"
                    }
                },
                {
                    name: "kidofcubes",
                    avatar: "kidofcubes",
                    avatarUseGithub: true,
                    position: "System Manager/Developer",
                    contact: {
                        github: "https://github.com/kidofcubes"
                    }
                },
                {
                    name: "yumio",
                    avatar: "yumio7",
                    avatarUseGithub: true,
                    position: "Developer/Designer",
                    contact: {
                        discord: "yumio",
                        twitter: "https://x.com/Yumio_7",
                        github: "https://github.com/kidofcubes"
                    }
                },
                {
                    name: "Anthei",
                    avatar: "https://cdn.discordapp.com/avatars/316934715535917058/7e8beef48cb2366abc09184c41001879.png?size=512",
                    avatarUseGithub: false,
                    position: "Developer/Designer",
                    contact: {
                        discord: "anthei",
                    }
                }
            ]
        },
        {
            name: "Builders",
            //image that resemble rule
            image: "/icons/staff/build-lead.webp",
            //color that resemble rule
            color: "#194bb5",
            list: [
                {
                    name: "GDK",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/689596661831434254/f89471928bff41fc79e12d36e726c956.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Senior Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "notspy_",
                    }
                },
                {
                    name: "Halfpot",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/218123473116069888/361845d6761e7c159c23fd3f5b33fcb2.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Senior Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "ramul8825",
                    }
                },
                {
                    name: "Yorvska",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/291656657077927936/905d2c5ddf7204d2ca4cf8e769bef0d6.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Senior Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        twitter: "https://x.com/Eorvun1",
                        discord: "yorvska"
                    }
                },
                {
                    name: "pizzaheadxd",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/285492492869304323/956f05b03d5e3d0b8551b8b66e77e59e.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "pizzaheadxd"
                    }
                },
                {
                    name: "AzureAqua",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/264519033188122625/257bd9b8d7f2eaf4609b322653452341.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "azureaqua"
                    }
                },
                {
                    name: "cheese04",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/627260730088882176/4073b44287002c71c4d07d4f91ec975e.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "cheese04"
                    }
                },
                {
                    name: "EmptyLie",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/518633407362629643/1e92f1d06780eae7e79709dc98e41501.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "emptylie"
                    }
                },
                {
                    name: "pacw64000",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/364079040690257920/269975a7c1a768cfc86198b3d0dede8a.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "pacw64000"
                    }
                },
                {
                    name: "pyraaya",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/294237640365047810/7bd177f85eec5502aa854b6396a3176c.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "pyraaya"
                    }
                },
                {
                    name: "Speedy",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/116243412994359299/49d755170234fbbd9ad2eeec685e4362.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "speedy"
                    }
                },
                {
                    name: "Volt7",
                    //url or GitHub username
                    avatar: "https://cdn.discordapp.com/avatars/321985549890224138/cc9ab76934053e9bf98693b9ac26b00a.png?size=512",
                    //if true, then the avatar must be the GitHub username
                    avatarUseGithub: false,
                    position: "Builder",
                    //the contact below can be deleted, but it is not supported to add a new contact, you need to change the corresponding code
                    contact: {
                        discord: "volt7"
                    }
                },
            ]
        },
    ]

})
