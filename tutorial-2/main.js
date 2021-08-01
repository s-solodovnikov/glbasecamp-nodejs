const http = require('http');

const file = require('./file');
const logger = require('./logger');

http
	.createServer((req, res) => {
		switch (req.url) {
			case '/read/txt1':
				res.writeHead(200, {'Content-Type': 'text/html'});

				file.getFileData('txt1.txt', (err, data) => {
					if (err) return logger.redText(err);

					logger.blueText('success: txt1.txt loaded :)');

					res.end(data);
				});

				break;

			case '/read/txt2':
				res.writeHead(200, {'Content-Type': 'application/json'});

				file.getFileData('txt2.txt', (err, data) => {
					if (err) return logger.redText(err);

					logger.yellowTextWithTimeout('success: txt2.txt loaded after timeout', 2000);
					logger.yellowText('success: txt2.txt loaded :)');

					res.end(data);
				});

				break;

			default:
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.end(`<!doctype><html><head><meta charset="utf-8"><title>task-2</title></head><body><h1>404 Error</h1></body></html>`);
		}
	})
	.listen(3000, () => console.log('Server is running...'));