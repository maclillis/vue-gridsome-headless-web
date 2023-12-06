# MammaFitness Web 2.0

This web is built on the Gridsome framework powered by VueJs and GraphQL with a headless admin from Wordpress.

### Dev

1. Install NodeJs, if haven't already from: `https://www.nodejs.com`
2. Run `npm install --global @gridsome/cli`
3. Run `npm install` in repository folder
4. Run `gridsome develop` to start dev environment on `localhost:8080`
5. Get some coffee ☕
6. Go coding! 🙌

### Build

1. Run `gridsome build` to build to static html-pages in /dist

### GraphQL playground

When in dev, go to `http://localhost:8080/___explore` to get GraphQL data layer acess.

### Easy content administration

All of the content (articles, sub pages etc.) is administrated through Headless Wordpress and the admin can be reached at: http://api-wordpress-dot-mammafitness.appspot.com/. Coaches fetches from an API enpoint at PT Online and is administrated through PT Online Admin.