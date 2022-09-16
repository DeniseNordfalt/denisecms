# CMS Final project

This is a project built with Storyblok and Next.js, deployed to Vercel.

## Backend

To reach the CMS and backend, access to Storyblok is needed.
This will be provided by email invite from the owner of the space.

Storyblok provides a limited account free of charge.

## Frontend

Clone the repository
`git clone https://github.com/DeniseNordfalt/denisecms.git`

install dependencies
`npm i`

create a `.env` file with a variable named `STORYBLOK_API_TOKEN=`

inside the storyblok space, go to settings > api-key and select the preview token and add the value to the `STORYBLOK_API_TOKEN` variable.

## Deploy

The project is deployed to vercel: [denisecms.vercel.app](https://denisecms.vercel.app/)

Deployments are made for both production from the master branch and for preview from the development branch.
The production branch should only show published content, while the preview branch should show both published and unpusblished content.
Published and unpublished content is deployed depending on the API-key access tokens set in Vercels enviroment variables.

Vercel automatically deploys after a push to a git branch.

Production: https://github.com/DeniseNordfalt/denisecms/deployments/activity_log?environment=Production

Preview: https://github.com/DeniseNordfalt/denisecms/deployments/activity_log?environment=Preview
