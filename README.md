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

## Packages List

The repository is using the packages in the list below

- [Nuxt Image](https://v1.image.nuxtjs.org/)
- [Nuxt typed router](https://nuxt-typed-router.vercel.app/)
- [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)
- [Seo-Kit](https://nuxt.com.cn/modules/seo-kit)
- [Tailwind CSS](https://tailwindcss.nuxtjs.org/)

## i18n

If you want to add i18n, please go to discord or issue and we will add the corresponding language to the repository

If you want to translate an existing language, please go to [crowdin](https://crowdin.com/project/gensokyo-reimagined-web) and translate

> [!WARNING]  
> Do not directly modify the contents of the lang folder except for en.json, as everything else is generated automatically

### Translation in each language

> [!NOTE]  
> The badges data is cached and automatically updated once an hour.

[![translation](https://badges.awesome-crowdin.com/translation-15098433-604479.png)](https://crowdin.com/project/gensokyo-reimagined-web)

## Config

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

Then go to crowdin and add the appropriate language

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
