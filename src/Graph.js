const fs = require("fs");
const Vertex = require("./Vertex");

class Graph {
  constructor(fileName) {
    this.fileName = fileName;
    this.array = this.readFile(fileName);
    this.size = this.array[0];

    this.vertices = new Array(this.size);
    this.edges = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      this.edges[i] = new Array(this.size);
    }

    for (let i = 0; i < this.size; i++) {
      this.vertices[i] = new Vertex(i);
    }

    this.fillMatrix(this.array);
  }

  fillMatrix(arrayInt) {
    let z = 1;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0 + i; j < this.size; j++) {
        if (i === j) {
          this.edges[i][j] = 0;
          continue;
        }

        this.edges[i][j] = arrayInt[z];
        this.edges[j][i] = arrayInt[z];
        z++;
      }
    }
  }

  readFile(fileName) {
    const file = fs.readFileSync(fileName);

    const arrayInt = file
      .toString()
      .split(/\s+/)
      .filter(words => words.length > 0)
      .map(str => parseInt(str));

    return arrayInt;
  }
}

module.exports = Graph;
