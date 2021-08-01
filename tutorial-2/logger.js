module.exports = {
	blueText(text) {
		global.console.log("\x1b[34m", text);
	},
	greenText(text) {
		global.console.log("\x1b[32m", text);
	},
	redText(text) {
		global.console.log("\x1b[31m", text);
	},
	yellowText(text) {
		global.console.log("\x1b[33m", text);
	},
	yellowTextWithTimeout(text, timeout) {
		global.setTimeout(() => this.yellowText(text), timeout)
	}
};