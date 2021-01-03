# Blockbuilder.app

> 🛠 Visual website builder for people who build sites for others

## About

Block Builder is a React based application to visually build websites. It uses tailwindcss as the styling framework for the UI as well as output.

## To Do

-   Add Duplicate to editor window instead of hover tool thing
-   Remove transparent color from palette all together
-   Add multiple options for shape dividers
-   add in option for left and right padding
-   add in option to customize gap width
-   move editor to slate
-   add in min height or something for empty text
-   add in reset to default/remove styles button for blocks
-   Add link color customization to text editing
-   Clean up textContent page

### Development

This project is using next js.

### Netlify

Testing out next-on-netlify package. To run locally, `npm run builder` and then `netlify dev`

### How does it work

The visual preview is made up of react components, that are rendered from state maintained in redux. The site is described as an object. When a user wants to edit a certain 'block' or 'piece' of the website, a popup will appear and allow the user to make edits to a clone of the particular piece in the site object tree. When changes are made, it is injected back into the main site object and the preview is updated.
