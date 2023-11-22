# Warthunder Plane Comparison

Compare plane stats for the game Warthunder. Choose plane 1, choose plane 2, compare their stats.

NOTE: This repo includes a python script for scraping the plane data from the War Thunder wiki.

```sh
yarn # install dependencies
yarn dev # start nextjs dev server
```

## Contents

- [Improvements](#improvements)
- [Useful links](#useful-links)

## Improvements

### Plane name query problem

There are some plane names that are used by more than one nation. The query to retrieve the correct plane will need to include the nation with the plane name. The nation will have to be available in the select element's options.

### Filter Planes

There are alot of planes. It would be useful to add some filtering mechanism, eg. filter by rank, nation etc.

I've done something similar before in my [Ships of trafalgar](https://github.com/tomahawk-jupiter/ships-of-trafalgar) project.

## Useful links

- [Flowbite - Component library built on tailwind](https://flowbite.com/docs/getting-started/introduction/)
- [Tailwind cheat sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind docs](https://tailwindcss.com/docs)
