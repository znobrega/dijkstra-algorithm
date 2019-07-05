//console.log("Heap minimo");

class MinHeap {
  constructor(heap) {
    this.heap = heap;
    this.size = heap.length;

    if (this.heap.length > 0) {
      this.buildMinHeap();
    }
  }

  parent(i) {
    if (i !== 0) {
      return Math.floor((i - 1) / 2);
    } else {
      return 0;
    }
  }

  leftChild(i) {
    if (i === 0) {
      return 1;
    } else {
      return 2 * i + 1;
    }
  }

  rightChild(i) {
    if (i === 0) return 2;
    else return 2 * i + 2;
  }

  swap(i, smallest) {
    const aux = this.heap[smallest];
    const auxPositionOne = this.heap[smallest].heapPosition;
    const auxPositionTwo = this.heap[i].heapPosition;

    this.heap[smallest] = this.heap[i];
    this.heap[smallest].heapPosition = auxPositionOne;

    this.heap[i] = aux;
    this.heap[i].heapPosition = auxPositionTwo;
  }

  minHeapify(i) {
    let l = this.leftChild(i);
    let r = this.rightChild(i);
    let smallest;
    if (this.size > l && this.heap[l].key < this.heap[i].key) {
      smallest = l;
    } else {
      smallest = i;
    }

    if (this.size > r && this.heap[r].key < this.heap[smallest].key) {
      smallest = r;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heap[i].heapPosition = i;
      this.minHeapify(smallest);
    }
  }

  buildMinHeap() {
    for (let i = Math.floor((this.size - 1) / 2); i >= 0; i--) {
      this.minHeapify(i);
    }
  }

  heapSort() {
    this.buildMinHeap();
    for (let i = this.size - 1; i > 0; i--) {
      this.swap(0, i);
      //this.size++;
      this.minHeapify(0);
    }
  }

  minElement() {
    return this.heap[0];
  }

  extractMin() {
    if (this.size < 1) {
      return "Heap underflow";
    }

    let min = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap.pop();
    this.size--;
    //this.length--;
    this.getAllHeapPosition();

    this.minHeapify(0);

    return min;
  }

  increaseKey(i, key) {
    if (key < this.heap[i]) {
      return "Nothing to be done";
    }

    this.heap[i].key = key;

    while (i > 0 && this.heap[this.parent(i)].key > this.heap[i].key) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  decreaseKey(i, key) {
    if (key > this.heap[i].key) {
      return "Nothing to be done";
    }

    this.heap[i].key = key;

    while (i > 0 && this.heap[this.parent(i)].key > this.heap[i].key) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  add(element) {
    this.size++;
    this.heap.unshift(element);
    console.log(`Size: ${this.size} Element: ${element}`);
    this.minHeapify(0);
  }

  getAllHeapPosition() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.heap[i]);
      this.heap[i].heapPosition = i;
    }
  }
}

module.exports = MinHeap;
//export default MinHeap;
// const one = new MinHeap();
// console.log(one);

// one.add(20);
// one.add(14);
// one.add(1);
// one.add(9);
// one.add(5);
// one.add(6);
// one.add(4);

// console.log(one);

// const two = new MinHeap([20, 14, 1, 9, 5, 6, 4]);

// console.log("Two");
// console.log(two);

// two.heapSort();
// console.log(two);

// two.increaseKey(3, 100);
// console.log(two);
