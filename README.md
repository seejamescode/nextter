# Nextter

A Twitter-like sample app with a perfect Google Lighthouse score.

## Dev Mode

Must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/) installed:

1. `git clone https://github.com/seejamescode/nextter`
2. `npm i`
3. `npm run dev`
4. Go to http://localhost:3000

## User Stories

- On the homepage, a user sees posts in a random order
- When a user clicks a post’s author, the user navigates to a list of that author’s posts
- When a post is clicked, a modal with the post and it’s comments is shown
- A user can also navigate directly to a individual post and it’s comments using the address bar

## Technologies Used

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - A minimalistic framework for server-rendered React applications
- [Node.js](https://nodejs.org) for the server
- [Express.js](https://expressjs.com/) for the server’s routing
- [ZEIT Now](https://zeit.co/now) for hosting the app on the web

## Auto Deployments on [ZEIT Now](https://zeit.co)

This repository is configured to auto-deploy to https://nextter.now.sh whenever code is pushed to the master branch.

If you are making a fork or new repo with this project’s code and want the same deployments, follow these steps:

1. Make an account on [ZEIT](https://zeit.co).
2. Create a new repo or fork this repo on GitHub.
3. Change the name and alias on `now.json` to your unique string. If you don’t have a full domain with ZEIT, `yourUniqueString.now.sh` will the domain.
4. Connect your GitHub account with your ZEIT account [here](https://zeit.co/account).
5. Configure Now for the repo from the first step in [your GitHub applications settings].
