const readfile = async () => {
  const response = await fs.readFile("./files/dij10.txt");

  return response;
};

const readFile = file =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });

const init = async () => {
  const content = await readFile("./files/dij20.txt");

  console.log(
    content
      .toString()
      .split(/\s+/)
      .filter(words => words.length > 0)
  );

  const m = [];
  let z = 1;
  for (let i = 0; i < size; i++) {
    for (let j = 0; i < size; i++) {
      if (i === j) {
        m[i][j] = 0;
        continue;
      }

      m[i][j] = content[z];
      m[j][i] = content[z++];
    }
  }
};

init();

var lineReader = require("readline").createInterface({
  input: fs.createReadStream("./files/dij10.txt")
});

lineReader.on("line", function(line) {
  console.log("Line from file:", line.split(" "));
});
