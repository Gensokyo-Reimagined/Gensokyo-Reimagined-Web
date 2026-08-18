export default defineAppConfig({
    HeaderLogoImg: '/img/logo.webp',
    //main page -> For the image on the right side of the page header, please put the corresponding image in public/img, and then fill in /img/1.png if the file name is 1.png
    IndexHeaderImg: [
        '/img/1.webp',
        '/img/2.webp',
        '/img/3.webp',
        '/img/4.webp',
        '/img/5.webp',
        '/img/6.webp',
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

    IndexRulesImg: '/img/rules.webp',
    RulesUrl: 'https://gensokyoreimagined.wiki.gg/wiki/Server_Rules',
    //Links in Navbar support all url formats
    NavBarLinkAbout: '#aboutus',
    NavBarLinkWiki: 'https://gensokyoreimagined.wiki.gg/wiki/Gensokyo_Reimagined_Wiki',
    NavBarLinkGithub: 'https://github.com/Gensokyo-Reimagined',
    NavBarLinkMap:
        'https://map.gensokyoreimagined.net/?world=minecraft_overworld',
    NavBarLinkTranslation: 'https://weblate.gensokyoreimagined.net/',

    //Store page -> PayNow headless checkout. StoreId is public (sent as x-paynow-store-id header from the browser);
    //the secret management key is NOT used on the frontend. Checkout flow: authenticate customer by Minecraft
    //Java username -> create checkout session for the product id -> redirect to the returned PayNow payment URL.
    StoreApiBase: 'https://api.paynow.gg',
    StoreId: '557920084392148992',
    //Store page -> categories shown as sticky tabs + stacked sections.
    //  - Category names live in i18n under store.categories.<key>.name; icon is FontAwesome.
    //  - A category with an empty `tiers` array renders a "Coming soon" placeholder.
    //  - Rank cards: names/perks live in i18n (store.tiers.<key>). Each tier has monthly + yearly
    //    {id, price}; the store's Monthly/Yearly toggle picks which PayNow product the button buys.
    //    To add Boosters/Soundtracks/Cosmetics products later, populate that category's `tiers` array.
    StoreCategories: [
        {
            key: 'ranks',
            icon: 'fa-solid fa-crown',
            tiers: [
                {
                    key: 'supporter',
                    gradient: 'linear-gradient(135deg, #f28395 0%, #e2354c 100%)',
                    accent: '#e2354c',
                    popular: false,
                    bgImage: '/img/store/supporter-reimu.png',
                    monthly: {id: '564886173625880576', price: '$3'},
                    yearly: {id: '564974196568887296', price: '$30'},
                    // perks: structure only; text comes from i18n store.tiers.<tier>.<key>.{name,detail}
                    //   info: has a hover detail tooltip | tags: shows the formatting grid (solid/full) | heading: section label
                    perks: [
                        {key: 'role'},
                        {key: 'cosmetics', info: true},
                        {key: 'disguise', info: true},
                        {key: 'chat', info: true, tags: 'solid'},
                        {key: 'maps', info: true},
                        {key: 'prefix'},
                        {key: 'auction', info: true},
                    ],
                },
                {
                    key: 'supporterPlus',
                    gradient: 'linear-gradient(135deg, #b388ff 0%, #7c4dff 100%)',
                    accent: '#7c4dff',
                    popular: true,
                    monthly: {id: '564893850666008576', price: '$10'},
                    yearly: {id: '564974202235396096', price: '$100'},
                    perks: [
                        {key: 'heading', heading: true},
                        {key: 'maps', info: true},
                        {key: 'cosmetics', info: true},
                        {key: 'chat', info: true, tags: 'full'},
                        {key: 'prefix'},
                    ],
                },
                {
                    key: 'jrFounder',
                    gradient: 'linear-gradient(135deg, #5ec5ff 0%, #2979ff 100%)',
                    accent: '#2979ff',
                    popular: false,
                    monthly: {id: '564895372619546624', price: '$20'},
                    yearly: {id: '564974204223488000', price: '$200'},
                    perks: [
                        {key: 'heading', heading: true},
                        {key: 'prefix'},
                        {key: 'more'},
                    ],
                },
                {
                    key: 'founder',
                    gradient: 'linear-gradient(135deg, #ffd86b 0%, #f6a623 100%)',
                    accent: '#b9770e',
                    popular: false,
                    monthly: {id: '564895718221807616', price: '$60'},
                    yearly: {id: '564974206287085568', price: '$600'},
                    perks: [
                        {key: 'heading', heading: true},
                        {key: 'prefix'},
                        {key: 'more'},
                    ],
                },
            ],
        },
        {key: 'boosters', icon: 'fa-solid fa-bolt', tiers: []},
        {key: 'soundtracks', icon: 'fa-solid fa-compact-disc', tiers: []},
        {key: 'cosmetics', icon: 'fa-solid fa-wand-magic-sparkles', tiers: []},
    ],
    // Chat formatting labels shown in the Supporter/Supporter+ tooltip (plain strings, rendered as-is).
    StoreFormatTags: ['Rainbow', 'Gradient', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Obfuscated', 'Custom font', 'Reset'],
})
