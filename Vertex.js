class Vertex {
  constructor(id) {
    this.id = id;
    this.key = Number.MAX_SAFE_INTEGER;
    this.predec = -1;
  }
}

module.exports = Vertex;
