const http = require('http');

const text = 'Plain text here';
const html = `<!doctype><html><head><meta charset="utf-8"><title>task-1</title></head><body><h1>Task 1 completed</h1></body></html>`;
const json = {
	users: [
		{
			name: 'User 1',
			age: 21,
			city: 'London'
		},
		{
			name: 'User 2',
			age: 29,
			city: 'Lodz'
		}
	]
};

http
	.createServer((req, res) => {
		switch (req.url) {
			case '/':
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(html);
				break;
			case '/text':
				res.writeHead(301, {'Content-Type': 'text/plain'});
				res.end(text);
				break;
			case '/json':
				res.writeHead(404, {'Content-Type': 'application/json'});
				res.end(JSON.stringify(json));
				break;
		}
	})
	.listen(3000, () => console.log('Server is running...'));