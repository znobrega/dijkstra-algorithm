const Graph = require("./Graph");
const Dijkstra = require("./Dijkstra");
const fs = require("fs");

console.log(
  "=================================================================="
);
console.log(
  "=                 This is the Djikstra algorithm                 ="
);
console.log(
  "=================================================================="
);

const graphMatrix10 = new Graph("./files/dij10.txt");
const dij10 = new Dijkstra(graphMatrix10, 0);

const graphMatrix20 = new Graph("./files/dij20.txt");
const dij20 = new Dijkstra(graphMatrix20, 0);

const graphMatrix30 = new Graph("./files/dij40.txt");
const dij40 = new Dijkstra(graphMatrix30, 0);

const graphMatrix40 = new Graph("./files/dij50.txt");
const dij50 = new Dijkstra(graphMatrix40, 0);
