# Blockbuilder.app

> 🛠 Visual website builder for people who build sites for others

## About

Block Builder is a React based application to visually build websites. It uses tailwindcss as the styling framework for the UI as well as output.

## To Do

-   Move options over to use tailwind config
-   Migrate all blocks to their own div for hover styling/spacing (example -> how margin & padding look on blocks on hover)

### Development

This project is using next js.

### Netlify

Testing out next-on-netlify package. To run locally, `npm run builder` and then `netlify dev`

### How does it work

The visual preview is made up of react components, that are rendered from state maintained in redux. The site is described as an object. When a user wants to edit a certain 'block' or 'piece' of the website, a popup will appear and allow the user to make edits to a clone of the particular piece in the site object tree. When changes are made, it is injected back into the main site object and the preview is updated.