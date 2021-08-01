const fs = require('fs');
const path = require('path');

module.exports = {
	getFileData(fileName, callback) {
		fs.readFile(path.join(__dirname, fileName), 'utf-8', callback);
	}
};