export default class {
  changesState(liveNeighbors) {
    return this.becomesAlive(liveNeighbors);
  }

  isAlive() {
    return false;
  }

  becomesAlive(liveNeighbors) {
    return liveNeighbors === 3;
  }
}
