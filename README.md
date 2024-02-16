<p align="center">
    <img src="https://raw.githubusercontent.com/Gensokyo-Reimagined/Gensokyo-Reimagined-Web/main/public/logo.svg" width="200" height="auto" alt="Gensokyo-Reimagined">
</p>

<div align="center">

# Gensokyo-Reimagined-Web

[Website](https://www.gensokyoreimagined.net/)

</div>

<!--
<p align="center">
</p>
-->

## Packages List 📦

The repository is using the packages in the list below

- [Nuxt Image](https://v1.image.nuxtjs.org/)
- [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)
- [Seo-Kit](https://nuxt.com.cn/modules/seo-kit)
- [Tailwind CSS](https://tailwindcss.nuxtjs.org/)
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)

## i18n 🌐

If you want to add i18n, please go to discord or issue and we will add the corresponding language to the repository

If you want to translate an existing language, please go to [gensokyoreimagined weblate](https://weblate.gensokyoreimagined.net/projects/gensokyo-reimagined-web/gensokyo-reimagined-web/) and translate

> [!WARNING]
> Do not directly modify the contents of the lang folder except for en.json, as everything else is generated automatically

### Translation in each language 💬

> [!NOTE]
> Badge data may be cached and updated automatically each time it is merged.

[![翻译状态](https://weblate.gensokyoreimagined.net/widget/gensokyo-reimagined-web/gensokyo-reimagined-web/multi-auto.svg)](https://weblate.gensokyoreimagined.net/engage/gensokyo-reimagined-web/)

### translator ✒️

Many thanks to the following staff for their translation and proofreading

[@Afk-82](https://crowdin.com/profile/afk-82) [@DanClypse](https://crowdin.com/profile/danclypse) [@hanja_2007](https://crowdin.com/profile/hanja_2007) [@n n](https://crowdin.com/profile/igorsolarev2006)[@Kurobu](https://crowdin.com/profile/kurobu) [@nolemretaWxd](https://weblate.gensokyoreimagined.net/user/nolemretaWxd/) [@Peaceful'Nightu](https://weblate.gensokyoreimagined.net/user/nolemretaWxdNightu) [@arksc](https://weblate.gensokyoreimagined.net/user/arksc) [@AlphaUberKesha](https://weblate.gensokyoreimagined.net/user/Alfozir_Vognystyj)

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

## Known problem ✏️

because the nuxt image module uses ipx for image optimization, there may be problems in the development process of not being able to display images,

and errors like `[500] [IPX_ERROR] Could not load the \"sharp\" module using the win32-x64 runtime\nPossible solutions:\n- Please upgrade Node.js:\n    Found 18.9.0\n    Requires ^18.17.0 || ^20.3.0 || >=21.0.0\n- Consult the installation documentation:\n    See https://sharp.pixelplumbing.com/install` May occur when accessing images.

Please ensure that your nodejs version is controlled at 18.17.0 (there may be problems with other modules later than this version). I don't know why that is

because using nuxt-seo-kit will cause the nuxt-i18n module to print warning, which should be no problem

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
