export default class {
  changesState(liveNeighbors) {
    return !this.staysAlive(liveNeighbors);
  }

  isAlive() {
    return true;
  }

  staysAlive(liveNeighbors) {
    return liveNeighbors === 2 || liveNeighbors === 3;
  }
}
