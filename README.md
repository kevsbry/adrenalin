# Adrenalin (ReactJS Test)

React project test for Flexisource IT

## Project Structure

Pages and Components have their own folder.

```bash
/pages | Listing.js
       | Detail.js

/components | DetailContent.js
            | Footer.js
            | Nav.js
            | Tiles.js
            | style.module.css
```

## Design

Website design has been followed according to the given instructions and sketch file.

- Mobile Responsive
- Merriweather and Roboto fonts used
- Font weight, color, size, spacing have been followed / RESPONSIVE
- Grid System and Flex Boxes implemented

## Data

Data from feed/data.json has been fetched using axios and rendered to the page.

## Routes

React router has been implemented in this project and each detail has its own route depending on the slug provided by feed/data.json

```
home => /
detail page => /detail/:slug
```
