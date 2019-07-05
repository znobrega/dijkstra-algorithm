const Heap = require("./Heapmin");

class Dijkstra {
  // initialize-single-source is workin on Graph.js

  /* 
    G = graph
    w = peso
  */
  constructor(g, s) {
    this.result = 0;
    this.complete(g, s);
    console.log(g);
  }

  initializeSingleSource(g, s) {
    let size = g.vertices.length;
    for (let i = size; i < size; i++) {
      g.vertices[i].id = i;
      g.vertices[i].key = 5;
      g.vertices[i].predec = -1;
      g.vertices[i].heapPosition = -1;
    }

    g.vertices[s].key = 0;
  }

  /**
   * PRECISA USAR O INCREASEE
   * PRECISA USAR O INCREASEE
   * PRECISA USAR O INCREASEE
   * PRECISA USAR O INCREASEE
   */
  relax(Q, nextVertex, currentVertex, weight) {
    if (nextVertex.key > currentVertex.key + weight) {
      nextVertex.key = currentVertex.key + weight;

      nextVertex.predec = currentVertex.id;
    }
  }

  complete(g, s) {
    this.initializeSingleSource(g, s);

    const S = [];
    const Q = new Heap([...g.vertices]);
    Q.getAllHeapPosition();

    while (Q.size > 0) {
      const u = Q.extractMin();
      S.push(u);

      for (let i = 0; i < Q.size; i++) {
        const ui = u.id;
        //const v = Q.heap[i].id;

        if (Q.heap[i].key > u.key + g.edges[ui][i]) {
          Q.heap[i].predec = ui;
          Q.decreaseKey(i, u.key + g.edges[u.id][i]);
        }
      }
    }
    console.log(S);
    S.forEach(v => (this.result += v.key));
    console.log(`RESULTADOOO = ${this.result}`);
  }
}

module.exports = Dijkstra;
