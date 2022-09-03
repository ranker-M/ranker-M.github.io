const fs = require("fs");
const dir = "./src/assets";
const files = fs.readdirSync(dir);
const fileNames = {}
for (let file of files) {
    if (!file.includes(".")) {
        fileNames[file] = fs.readdirSync(dir + "/" + file);
    }
}

fs.writeFileSync("./src/alphaca-features.json", JSON.stringify(fileNames), { flag: 'w+', encoding: 'utf-8' });