const fs = require("fs");

module.exports = (filePath) => {
    try {
        return fs.readFileSync(filePath, 'utf8').toString().split("\n");
      } catch (err) {
        console.error(err)
      }
}