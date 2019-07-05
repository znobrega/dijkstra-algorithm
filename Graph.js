const Heapmin = require("./Heapmin");
const fs = require("fs");
const Vertex = require("./Vertex");

class Graph {
  constructor(v, a) {
    this.vertices = new Array(a);
    this.edges = new Array(v);

    for (let i = 0; i < this.edges.length; i++) {
      this.edges[i] = new Array(v);
    }

    for (let i = 0; i < a; i++) {
      this.vertices[i] = new Vertex(i);
    }
  }
}

module.exports = Graph;
