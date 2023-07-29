export default defineAppConfig({
  //main page -> For the image on the right side of the page header, please put the corresponding image in public/img, and then fill in /img/1.png if the file name is 1.png
  IndexHeaderImg: '/img/main_min.png',
  //main page -> Feature Four content icon in front of the class, you can be obtained from https://fontawesome.com/search （We are using the pro version, so please feel free to use pro）
  IndexFeatureIcon: [
    'fa-solid fa-circle-info',
    'fa-solid fa-circle-info',
    'fa-solid fa-circle-info',
    'fa-solid fa-circle-info',
  ],
  //main page -> cta Component on the right of the picture. The method used is similar to that of IndexHeaderImg
  IndexCtaImg: '/img/discord-screenshot.png',
  //main page -> rules Component on the left of the picture. The method used is similar to that of IndexHeaderImg
  IndexRulesImg: '/img/minecraft-bookshelf.jpg',
})
