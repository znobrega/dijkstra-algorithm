const graph = require("./Graph");
const Dijkstra = require("./Dijkstra");
const fs = require("fs");

console.log(
  "=================================================================="
);
console.log("Hello, this is the Djikstra algorithm");
console.log(
  "=================================================================="
);

const file = fs.readFileSync("./files/dij10.txt");

const arrayInt = file
  .toString()
  .split(/\s+/)
  .filter(words => words.length > 0)
  .map(str => parseInt(str));

const size = arrayInt[0];

const graphMatrix = new graph(size, size - 1);
const arr = [1, 2, 3];
let z = 1;
for (let i = 0; i < size; i++) {
  for (let j = 0 + i; j < size; j++) {
    if (i === j) {
      graphMatrix.edges[i][j] = 0;

      continue;
    }

    graphMatrix.edges[i][j] = arrayInt[z];
    graphMatrix.edges[j][i] = arrayInt[z];
    z++;
  }
}

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

  return content;
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

//init().then((content) => const );

// PROBLEM WITH SWAP HEAP POSITION

const dij10 = new Dijkstra(graphMatrix, 0);
