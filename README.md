# A Next.js and Sanity Starter Template<!-- omit in toc -->

This starter is a statically generated personal website that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content. It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a personal website or learn these technologies.

> **Note**
>
> This repo uses the experimental [app][app-dir] directory for Next.js routing.

## Features

- A performant, static website with editable projects
- A native and customizable authoring environment, accessible on `yourdomain.com/studio`
- Real-time and collaborative content editing with fine-grained revision history
- Side-by-side instant content preview that works across your whole site
- Support for block content and the most advanced custom fields capability in the industry
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Free Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- A project with starter-friendly and not too heavy-handed TypeScript and Tailwind.css

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Questions and Answers](#questions-and-answers)
  - [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
  - [How can I remove the "Next steps" block from my personal site?](#how-can-i-remove-the-next-steps-block-from-my-personal-website)
- [Next steps](#next-steps)
## Project Overview

| [Personal Website](https://nextjs-personal-website-app-dir.sanity.build)                                                  | [Studio](https://nextjs-personal-website.sanity.build/studio)                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Personal Website](https://user-images.githubusercontent.com/6951139/206395107-e58a796d-13a9-400a-94b6-31cb5df054ab.png) | ![Sanity Studio](https://user-images.githubusercontent.com/6951139/206395521-8a5f103d-4a0c-4da8-aff5-d2a1961fb2c0.png) |

### Important files and folders

| File(s)                                     | Description                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| `sanity.config.ts`                          | Config file for Sanity Studio                           |
| `sanity.cli.ts`                             | Config file for Sanity CLI                              |
| `/app/studio/[[...index]]/page.tsx`         | Where Sanity Studio is mounted                          |
| `/pages/api/preview.ts`                     | Serverless route for triggering Preview mode            |
| `/schemas`                                  | Where Sanity Studio gets its content types from         |
| `/plugins`                                  | Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client        |
| `/lib/sanity.preview.ts`                    | Configuration for the live Preview Mode                 |

## Configuration

### Step 1. Set up the environment

```bash
# Clone this repository and install dependencies.
git clone git@github.com:bjh-dev/nextjs-13-sanity-starter.git
cd nextjs-13-sanity-starter && pnpm i

# You may also need to install peer-deps
npx install-peerdeps --pnpm sanity
```

### Step 3. Configure your Sanity Project and environment variables

Copy `.env.local.example`

```bash
cp .env.local.example .env.local
```

Update the environment variables
```env
NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER=
NEXT_PUBLIC_VERCEL_GIT_PROVIDER=
NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
NEXT_PUBLIC_SANITY_PROJECT_TITLE=
SANITY_REQUIRE_PREVIEW_SECRET=
```

If you don't already have a Sanity project started, you might consider starting one with the coupon code for [Sonny Sangha](https://www.papareact.com/) (a.k.a "PAPA React").

 1. Visit the [Sanity page](https://www.sanity.io/sonny) for the coupon and press the "Get Started" button
 2. Sign in with your Sanity Account and press the "Let's Go" button.
 3. This will generate a install command for the Studio (like this: `npm create sanity@latest -- --template get-started --project PROJECT_ID --dataset production)
` but don't use it! Instead grab the PROJECT_ID immediately after the `--project` flag and add it to your `.env.local`.
4. Create the Sanity API read and write tokens in your project's API section on the Sanity website
5. Add your development domain in the API section too (e.g. `http://localhost:3000`)

### Step 3. Run Next.js locally in development mode

```bash
pnpm i && pnpm dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your personal website should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:


## Questions and Answers

### It doesn't work! Where can I get help?

In case of any issues or questions, you can post:

- [GitHub Discussions for Next.js][vercel-github]
- [Sanity's GitHub Discussions][sanity-github]
- [Sanity's Community Slack][sanity-community]

### How can I remove the "Next steps" block from my personal website?

You can remove it by deleting the `IntroTemplate` component in `/app/(personal)/layout.tsx`.

## Next steps

- [Join our Slack community to ask questions and get help][sanity-community]
- [How to edit my content structure?][sanity-schema-types]
- [How to query content?][sanity-groq]
- [What is content modelling?][sanity-content-modelling]

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fsanity-template-nextjs-appdir-personal-website&project-name=nextjs-appdir-personal-website&repository-name=nextjs-appdir-personal-website&demo-title=Personal+Website+with+Built-in+Content+Editing&demo-description=A+Sanity-powered+personal+website+with+built-in+content+editing+and+instant+previews.+Uses+app+directory.&demo-url=https%3A%2F%2Ftemplate-nextjs-appdir-personal-website.sanity.build%2F&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F6951139%2F206395107-e58a796d-13a9-400a-94b6-31cb5df054ab.png&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs%3Btemplate%3Dsanity-template-nextjs-appdir-personal-website
[integration]: https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-create]: https://www.sanity.io/get-started/create-project?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-deployment]: https://www.sanity.io/docs/deployment?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel]: https://vercel.com
[vercel-github]: https://github.com/vercel/next.js/discussions
[personal-website-pages]: https://github.com/sanity-io/sanity-template-nextjs-appdir-personal-website
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory
