export default defineAppConfig({
  //main page -> For the image on the right side of the page header, please put the corresponding image in public/img, and then fill in /img/1.png if the file name is 1.png
  IndexHeaderImg: [
    '/img/main_min.png',
    '/img/asura.jpg',
    '/img/youkaimountain.png',
    '/img/sunflower.jpg',
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
  IndexAbobutImg: '/img/about_pic.jpg',
  //main page -> Feature Four content Img, The method used is similar to that of IndexHeaderImg
  IndexFeatureImg: [
    '/img/mobs.jpg',
    '/img/class.jpg',
    '/img/quests.jpg',
    '/img/season.png',
  ],
  //main page -> cta Component on the right of the picture. The method used is similar to that of IndexHeaderImg
  IndexCtaImg: '/img/discord-screenshot.png',
  IndexRulesImg: '/img/minecraft-bookshelf.jpg',
  //Links in Navbar support all url formats
  NavBarLinkAbout: '/',
  NavBarLinkWiki: '/',
  NavBarLinkGithub: 'https://github.com/Gensokyo-Reimagined',
})
