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
    DCLink: 'https://discord.gg/greimagined',

    IPCtaShow: true,
    IndexIPCtaImg: '/img/ipc.webp',
    // main page -> IPcta Component's Server IP context
    BuildServerIP: 'build.gensokyoreimagined.net',
    SurvivalServerIP: 'Under Development',

    MPCtaShow: true,
    IndexModPackCtaImg: '/img/modrinth.webp',
    MPLink: 'https://modrinth.com/modpack/gensokyo-reimagined-qol',

    IndexRulesImg: '/img/minecraft-bookshelf.webp',
    RulesUrl: 'https://gensokyoreimagined.wiki.gg/wiki/Server_Rules',
    //Links in Navbar support all url formats
    NavBarLinkAbout: '#aboutus',
    NavBarLinkWiki: 'https://gensokyoreimagined.wiki.gg/wiki/Gensokyo_Reimagined_Wiki',
    NavBarLinkGithub: 'https://github.com/Gensokyo-Reimagined',
    NavBarLinkMap:
        'https://map.gensokyoreimagined.net/?world=minecraft_overworld',
    NavBarLinkTranslation: 'https://weblate.gensokyoreimagined.net/',
})
