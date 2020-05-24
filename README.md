# Adrenalin (ReactJS Test)

Foobar is a Python library for dealing with word pluralization.

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

- Merriweather and Roboto fonts used
- Font weight, color, size, spacing have been followed
- Grid System and Flex Boxes implemented

## Data

Data from /feed/data.json has been consumed using axios and rendered to the page.

## Routes

React router has been implemented in this project and `/adrenalin` is set as homepage, each tile is clickable will redirect the user to the `/detail/:slug` when clicked, each content-detail has its's own slug which has been fetch from data.json file

```
/adrenalin
/detail/slug
```
