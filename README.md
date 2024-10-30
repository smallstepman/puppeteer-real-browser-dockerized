# Puppeteer Real Browser Scraper

This project allows you to scrape web pages using Puppeteer wrapped in a Docker container. It supports two modes: **Command-Line Mode** & **HTTP Server Mode**

## Installation 

Pull the Docker Image:
```bash
docker pull ghcr.io/smallstepman/puppeteer-real-browser-dockerized:latest
```

## Usage

### Command-Line Mode
Scrape a URL and output the HTML to the console:

Usage (console):
```bash
docker run ghcr.io/smallstepman/puppeteer-real-browser-dockerized:latest http://example.com
```

Usage (python):
```python
import subprocess

def scrape_url(url):
    # Run the docker container, passing the URL as an argument
    result = subprocess.run(
        ['docker', 'run', 'my-scraper-image', url],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    # Handle errors
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        return None
    html_output = result.stdout
    return html_output

html_content = print(scrape_url('http://example.com'))
```

### HTTP Server Mode
Run an HTTP server that accepts POST requests to scrape URLs:
```bash
docker run -p 3000:3000 ghcr.io/smallstepman/puppeteer-real-browser-dockerized:latest serve
```

Usage (console):
```bash
curl -X POST -H "Content-Type: application/json" -d '{"url":"http://example.com"}' http://localhost:3000/scrape
```

Usage (python):
```python
import requests

def scrape_url_via_api(url):
    response = requests.post('http://localhost:3000/scrape', json={'url': url})
    if response.status_code == 200:
        return response.text
    else:
        print(f"Error: {response.status_code} {response.text}")
        return None

print(scrape_url_via_api('http://example.com'))
```
