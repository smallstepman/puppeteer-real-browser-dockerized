# Puppeteer Scraper

This project allows you to scrape web pages using Puppeteer wrapped in a Docker container. It supports two modes:

- **Command-Line Mode**: Scrape a single URL and output the HTML to the console.
- **HTTP Server Mode**: Run an HTTP server that accepts POST requests to scrape URLs.

## Usage

### Pull the Docker Image

```bash
docker pull your_dockerhub_username/puppeteer-scraper:latest
```

### Command-Line Mode

Scrape a URL and output the HTML to the console:

```bash
docker run your_dockerhub_username/puppeteer-scraper:latest http://example.com
```

### HTTP Server Mode

Run the HTTP server:

```bash
docker run -p 3000:3000 your_dockerhub_username/puppeteer-scraper:latest serve
```

Send a POST request to `/scrape` with a JSON body containing the `url`:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url":"http://example.com"}' http://localhost:3000/scrape
```

## Development

### Running Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/your_username/puppeteer-scraper.git
cd puppeteer-scraper
npm install
```

Run in command-line mode:

```bash
node scrape.js http://example.com
```

Run in HTTP server mode:

```bash
node serve-scraper.js
```

### Building the Docker Image

```bash
docker build -t puppeteer-scraper .
```

### Running the Docker Container

Refer to the usage instructions above.

## Contributing

Feel free to open issues or submit pull requests.

## License

[MIT](LICENSE)