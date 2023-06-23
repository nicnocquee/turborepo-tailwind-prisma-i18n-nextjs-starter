# Turborepo Tailwind Prisma i18next Starter

[![GitHub Workflow Status](https://github.com/nicnocquee/turborepo-tailwind-prisma-i18n-nextjs-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/nicnocquee/turborepo-tailwind-prisma-i18n-nextjs-starter/actions/workflows/ci.yml)

This a [Turborepo monorepo](https://turbo.build/repo/docs) starter that uses Tailwind, Prisma, and i18next. It also uses a type-safe shared environment variables. If you don't need the i18next, you can check out the [turborepo-tailwind-prisma-nextjs-starter](https://github.com/nicnocquee/turborepo-tailwind-prisma-nextjs-starter).

# Requirements

- [Node.js 18+](https://nodejs.org/en)
- [pnpm 8+](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [Turbo](https://turbo.build/repo/docs/installing)

# Getting Started

- Clone this repo then go to the directory
- Run `pnpm install`
- Run `cp packages/env/.env.example packages/env/.env && ./dev-bootstrap.sh` to set up the environment variables
- Run `docker-compose up` to run the Postgres database
- Open a new terminal tab then run `cd packages/database/ && pnpm db:migrate:reset`. You only need to do this once.
- **Back to the root directory** then run `pnpm run dev`
- Open in browser http://localhost:3000 for the `web` Next.js app and http://localhost:3001 for the `docs` Next.js app.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: an example [Next.js 13 (App Router)](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/).
- `web`: another example [Next.js 13 (App Router)](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) and Prisma.
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `tsconfig`: `tsconfig.json`s used throughout the monorepo.
- `database`: the schema and client of Prisma used by both `web` and `docs` applications.
- `env`: the typed safe environment variables used throught the monorepo using [t3-env](https://github.com/t3-oss/t3-env).
- `i18n`: the code and translations for the internationalization used in the `web` application.

Notes:

- Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
- Every component in the `ui` package is a [Client component](https://nextjs.org/docs/getting-started/react-essentials#client-components). The `"use client"` directive is added automatically by `packages/ui/scripts/post-build.sh` script. Adding `"use client"` directive in the component files do nothing because [tsup/esbuild strip the off](https://github.com/egoist/tsup/issues/835#issuecomment-1481150839).
- The live version of `web` app can be found in [https://turbo-next-prisma-tailwind-web.vercel.app/](https://turbo-next-prisma-tailwind-web.vercel.app/).
- The live version of `docs` app can be found in [https://turbo-next-prisma-tailwind-docs.vercel.app/](https://turbo-next-prisma-tailwind-docs.vercel.app/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Prisma](https://www.prisma.io/) for database ORM
- [Next-i18next](https://github.com/i18next/next-i18next) for internationalization.

### Environment Variables

During development, this monorepo uses single environment variable file located in `packages/env/.env`. When you execute the `./dev-bootstrap` script, it creates symlink for the `.env` file into the other apps and packages. You can then read the environment variables by importing the `env` package.

```typescript
import { env } from "env";

console.log(env.HELLO_WORLD);
console.log(env.NEXT_PUBLIC_HELLO_WORLD);
```

The `env` package exports a type-safe environment variables using [t3-env](https://github.com/t3-oss/t3-env) and [zod](https://zod.dev/).

Notes:

- Don't read the environment variables directly from `process.env`.
- Only edit the `packages/env/.env` file if you want to add, edit, or remove environment variables. Keep the `packages/env/.env` as the single source
- Use `env.NEXT_PUBLIC_<name>` if you want to read the variable from a Client component. If you read a `env.<name>` variable from a Client component, you'll get error.
- If you make changes to server environment variables or the client environment variables, you need to edit the `packages/env/src/index.ts` file too.

### Internationalization

To add support for multiple languages in any Next.js apps in the `apps` directory,

1. you need to use `[lng]` [route param](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).
2. Call `useTranslation` in the page's server component.

   ```typescript
   // import useTranslation from our local i18n package
   import { useTranslation } from "i18n";

   // with `client-page` namespace
   const { t } = await useTranslation(lng, "client-page");

   // or without the namespace
   const { t } = await useTranslation(lng);
   ```

3. Call `t("to-second-page")` to get translated strings.

Notes:

- The translation strings are stored in the `public/locales/de`, `public/locales/en`, and `public/locales/it` directories.
- To change the settings for i18next, edit the `packages/i18n/src/settings/index.ts` file.
- More information about using i18next with Next.js App Route can be found in [18next guide](https://locize.com/blog/next-13-app-dir-i18n/).

## How to

- Add new workspace: `turbo gen workspace`
- Copy a workspace: `turbo gen workspace --copy`
- Add npm package to a workspace: `pnpm add <package_name> --filter workspace`

## Troubleshoting

- If VSCode shows error: `Cannot find module 'ui' or its corresponding type declarations.ts(2307)` or for any modules, restart the TS Server: Press `Cmd+Shift+P` then type `restart ts`, then Enter to restart the typescript server. For convenience, I changed the keyboard shortcut in VSCode to restart the TypeScript server to `Cmd+shift+§`.
- If VSCode shows error `Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key` errors, you need to use the TypeScript version in the workspace. Press `Cmd+Shift+P`, then type `Select TypeScript version..`, then select `Use Workspace version` which is the version 5.1.3 as of this writing.
