# Warthunder plane scraper

A python script for scraping data about all planes from the game Warthunder. It only scrapes a few of the stats/info.

There is a script for scraping and saving to CSV, then a script for cleaning the CSV and saving a copy as JSON.

NOTE: the scrape takes some time (many minutes). There are aprox 1000 planes and it takes maybe 1 second for each.

## To Run

Activate conda environment if using conda:

```sh
conda activate base
```

Go inside the scraper directory, run the scrape script, then run the clean data script:

```sh
cd scraper/
python3 scrape_planes.py
python3 clean_the_data.py
```
