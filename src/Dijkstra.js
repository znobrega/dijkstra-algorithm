const Heap = require("./Heapmin");

class Dijkstra {
  constructor(g, s) {
    this.path = "";
    this.complete(g, s);
  }

  initializeSingleSource(g, s) {
    for (let i = 0; i < g.vertices.length; i++) {
      g.vertices[i].id = i;
      g.vertices[i].key = Number.MAX_SAFE_INTEGER;
      g.vertices[i].predec = -1;
    }

    g.vertices[s].key = 0;
  }

  result(finalVertices) {
    finalVertices.forEach(v => {
      if (v.id === finalVertices.length - 1) {
        console.log(`Shortest path: ${v.key}`);
        this.path = `${v.id}` + this.path;
        this.showPath(finalVertices, v.predec);
      }
    });
  }

  showPath(finalVertices, predec) {
    finalVertices.forEach(vertice => {
      if (vertice.id === predec) {
        this.path = `${vertice.id}->` + this.path;
        this.showPath(finalVertices, vertice.predec);
      }
    });
  }

  complete(g, s) {
    this.initializeSingleSource(g, s);

    const S = [];
    //const Q = new Heap([...g.vertices]);
    const Q = new Heap(g.vertices);

    while (Q.size > 0) {
      const u = Q.extractMin();
      S.push(u);

      for (let i = 0; i < Q.size; i++) {
        const v = Q.heap[i].id;
        //RELAX
        if (Q.heap[i].key > u.key + g.edges[u.id][v]) {
          Q.heap[i].predec = u.id;
          Q.decreaseKey(i, u.key + g.edges[u.id][v]);
        }
      }
    }
    console.log(`Filename: ${g.fileName.substring(8)}`);
    this.result(S);
    console.log(`Shortest Route: ${this.path}\n`);
  }
}

module.exports = Dijkstra;
