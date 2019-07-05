class Vertex {
  // this.id
  // this.key
  // this.predec

  constructor(id) {
    this.id = id;
    this.key = Number.MAX_SAFE_INTEGER;
    this.predec = -1;
    this.heapPosition = -1;
  }
}

module.exports = Vertex;
