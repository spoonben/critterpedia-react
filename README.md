Critterpedia
---

# What is this?

**Hopefully** a simple search application to look up details about critters (bugs and fish) in Animal Crossing: New Horizons.
You can visit the production version here: https://acnh-critterpedia.herokuapp.com/


# Contributing 
We'd love your feedback! Feel free to:
- Open a PR if you feel comfortable! 
- If you don't code, or don't feel comfortable opening a pull request, [open a new issue](https://github.com/spoonben/critterpedia-react/issues/new)! These are how we are going to handle feature requests and bugs (not critters, but those bad code bugs)
- If there is some other way you would like to contribute, let us know. 


# Development
- Clone the repo and then run: `npm install`
- Once everything is installed run `npm run dev` [Then navigate to localhost:8080](http://localhost:8080)

Webpack dev server is setup and should auto refresh changes made.

**Note** this repo uses [Prettier](https://prettier.io/) to maintain code quality. It will run on a pre-push hook.
If you'd like to run prettier right before pushing, it's pretty simple:
- `npx prettier -c --write [file-name]` is all it takes. That will run prettier on the file you give it, and write the suggested changes. **I suggest committing all your code before doing this** so you don't lose all your important app changes in a sea of code quality changes.
