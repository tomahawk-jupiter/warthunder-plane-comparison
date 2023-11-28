# Warthunder Plane Comparison

## Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Run project](#run-project)
- [Improvements](#improvements)
- [Useful links](#useful-links)

## Overview

THIS IS A WORK IN PROGRESS

Compare plane stats for the game Warthunder. Choose plane 1, choose plane 2, compare their stats. The best/worst stat will be highlighted.

I made this to quickly compare plane stats to see what advantage you might have over an opponent, eg. will their wings rip off in a high speed dive before yours will? Can you out-turn them? Etc..

I have included some filters to narrow down the data when looking for a plane, there are over 1000 planes so this is quite necessary.

NOTE: This repo includes a python script for scraping the plane data from the War Thunder wiki. It has its own README for details.

## Packages, Libraries etc

- [NextJS](https://nextjs.org/docs)
- [React](https://react.dev/reference/react)
- [TailwindCSS](https://tailwindcss.com/docs/installation)

## Screenshots

![Sample Image](https://via.placeholder.com/150)

## Run project

```sh
yarn # install dependencies
yarn dev # start nextjs dev server
```

## Improvements

### Plane name query problem

There are some plane names that are used by more than one nation. The query to retrieve the correct plane will need to include the nation with the plane name. The nation will have to be available in the select element's options?

## Useful links

- [Flowbite - Component library built on tailwind](https://flowbite.com/docs/getting-started/introduction/)
- [Tailwind cheat sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind docs](https://tailwindcss.com/docs)
