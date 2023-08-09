<p align="center">
    <img src="https://cdn.staticaly.com/gh/Gensokyo-Reimagined/Gensokyo-Reimagined-Web/main/public/logo.svg" width="200" height="auto" alt="houbunsop">
</p>

<div align="center">

# Gensokyo-Reimagined-Web

[Website (not yet online)]()

</div>

<!--
<p align="center">
</p>
-->

## Packages List 📦

The repository is using the packages in the list below

- [Nuxt Image](https://v1.image.nuxtjs.org/)
- [Nuxt typed router](https://nuxt-typed-router.vercel.app/)
- [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)
- [Seo-Kit](https://nuxt.com.cn/modules/seo-kit)
- [Tailwind CSS](https://tailwindcss.nuxtjs.org/)

## i18n 🌐

If you want to add i18n, please go to discord or issue and we will add the corresponding language to the repository

If you want to translate an existing language, please go to [crowdin](https://crowdin.com/project/gensokyo-reimagined-web) and translate

> [!WARNING]  
> Do not directly modify the contents of the lang folder except for en.json, as everything else is generated automatically

### Translation in each language 💬

> [!NOTE]  
> Badge data may be cached and updated automatically each time it is merged.

![cs translation](https://img.shields.io/badge/dynamic/json?color=blue&label=cs&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27cs%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![de translation](https://img.shields.io/badge/dynamic/json?color=blue&label=de&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27de%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![el translation](https://img.shields.io/badge/dynamic/json?color=blue&label=el&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27el%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![es-ES translation](https://img.shields.io/badge/dynamic/json?color=blue&label=es-ES&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27es-ES%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![fr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=fr&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27fr%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![it translation](https://img.shields.io/badge/dynamic/json?color=blue&label=it&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27it%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![ja translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ja&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27ja%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![pl translation](https://img.shields.io/badge/dynamic/json?color=blue&label=pl&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27pl%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![ru translation](https://img.shields.io/badge/dynamic/json?color=blue&label=ru&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27ru%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![tr translation](https://img.shields.io/badge/dynamic/json?color=blue&label=tr&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27tr%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![uk translation](https://img.shields.io/badge/dynamic/json?color=blue&label=uk&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27uk%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)
![zh-CN translation](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-CN&style=flat&logo=crowdin&query=%24.progress[?(@.data.languageId==%27zh-CN%27)].data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15098433-604479.json)

### translator ✒️

Many thanks to the following staff for their translation and proofreading

- zh-CN: [@Afk-82](https://crowdin.com/profile/afk-82)
- Ja:
- cs:
- de:
- el:
- es-ES: [@DanClypse](https://crowdin.com/profile/danclypse)
- fr: [@hanja_2007](https://crowdin.com/profile/hanja_2007)
- pl:
- ru: [@n n](https://crowdin.com/profile/igorsolarev2006)
- tr:
- uk:
- it: [@Kurobu](https://crowdin.com/profile/kurobu)


## Config 🔧

> [!IMPORTANT]  
> Starting here is written for developers and regular contributors can skip

We now have 3 configuration files, 

one is in `/lang/en.json`, which is the source text of i18n, 

one is in `/app.config.ts`, which is the configuration file of the element content, such as setting ICONS/images somewhere, 

and one is `/nuxt.config.ts`, This is the configuration file for the entire project, and generally you only need to change the configuration in runtimeConfig

There are usually comments in the configuration file to tell you how to fill it out, please note

If you need to change the theme color, go to `/assets/css/main.css`

### How to add new i18n language

In the repository, all you need to do is add a new language as follows in i18n of `nuxt.config.ts`

```ts
  i18n: {
    locales: [
      {
        code: '[Language code, such as en/ja]',
        file: '[The character entered in code].json',
      },
    ],
  },
```

Then you need to add the corresponding language to data() in `<script>` 在 `components/NavBar.vue` as follows

```json

languages: [
        {
          lang: "en",
          name: "English",
          flag: "twa-flag-united-states"
        }, {
          lang: "ja",
          name: "日本語",
          flag: "twa-flag-japan"
        },{
          lang: "[Language code, such as en/ja]",
          name: "[Language name]",
          flag: "[twitter national flags, such as twa-flag-united states for the flag of the United States]"
        },
      ]

```

Then go to crowdin and add the appropriate language

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
