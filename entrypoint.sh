#!/bin/bash

if [ "$1" = "serve" ]; then
  shift
  node serve-scraper.js "$@"
else
  node scrape.js "$@"
fi