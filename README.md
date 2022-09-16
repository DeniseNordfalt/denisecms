# CMS Final project

This is a project built with Storyblok and Next.js, deployed to Vercel.

## Backend

The backend is hosted at the storyblok cloud: https://app.storyblok.com/

To reach the CMS and backend, access to the Storyblok space is needed.
This will be provided by email invite from the owner of the space.
When recieving the invite, you'll need to sign up for a storyblok account.
Storyblok provides a limited account free of charge.

If you wish to recieve an invite, you can email the space owner at: denisenordfalt@gmail.com

## Frontend

This project is written with the help of [Visual Studio Code](https://code.visualstudio.com/)

Clone the repository:
`git clone https://github.com/DeniseNordfalt/denisecms.git`

install dependencies:
`npm i`

create a `.env` file with a variable named `STORYBLOK_API_TOKEN=`

inside the storyblok space, go to settings > API-keys and select the `preview` token. Add the value of the token to the `STORYBLOK_API_TOKEN` variable.

Clarification:
In the `next.config.js` there is another env variable, this is to fix a problem where the Storyblok `apiPlugin` don't speak directly to the `.env` file, and needs to be redirected through the `next.config.js env` variable, which then calls to the `.env` variable we create.
The only env variable that needs to be changed is the `STORYBLOK_API_TOKEN` in the `.env` file.

## Development

Set up the default domain to the live site in settings: https://denisecms.vercel.app or http://localhost:3000/ if working locally.
Set up the edit preview domain in the Storyblok space to `http://localhost:3000/api/preview?secret=STORYBLOK_API_TOKEN&slug=`. Use Storyblok V1, since V2 requires https://.
Where STORYBLOK_API_TOKEN is the value of the env variable/preview access token. This will only be used inside of the CMS, and is used to see unpublished edits made to the visual editor.

Start the project in your visual studio code editor terminal with `npm run dev`

The full API is reachable at: `https://api.storyblok.com/v2/cdn/stories/?version=draft&token=STORYBLOK_API_TOKEN`

Where STORYBLOK_API_TOKEN is the access token for the api described previously.

To switch to see only published on unpublished content, change the value in the variable sbParams in pages/index.js and pages/[...slug].js.
'production' for the live site.
'draft' for development.

## Storyblok CMS

To make new content. Go to the content folder, press the +Entry button in the top right corner and select type of entry.
Static pages are `Page` and Blog posts are `Post`.
Only published content will show up when using the master branch. To publish click publish in the top right corner when inside a Post.
Or select Content and click publish when outside of the content component.

To see edits not yet published. Make sure to use development bransch, or temporarily switch sbParams to draft i master, and use the edit preview link in the dropdown in the adressbar.

## Deploy

The project is deployed to vercel: [denisecms.vercel.app](https://denisecms.vercel.app/)

Deployments are made for both production from the master branch and for preview from the development branch.
The production branch should only show published content, while the preview branch should show both published and unpusblished content.
Published and unpublished content is deployed depending on the API-key access tokens set in Vercels enviroment variables.
API-key access tokens are found in the storyblok space under settings.

Vercels env variables should be set to:
The public access token for production.
The preview access token for development and preview.

The master branch should have sbParams set to 'production'

Vercel automatically runs npm build and deploys after a push to a git branch.

[Production](https://github.com/DeniseNordfalt/denisecms/deployments/activity_log?environment=Production)

[Preview](https://github.com/DeniseNordfalt/denisecms/deployments/activity_log?environment=Preview)

Recommended:
To make changes to the master branch and live production site, create a pull request in github from a branch to master, and vercel will make a check to see if the deploy is successful before merging.
