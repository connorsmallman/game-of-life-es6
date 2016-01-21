import Cell from './cell/cell';

class Coordinate {
  constructor(x = 1, y = 1, cell = Cell.createRandom()) {
    this.x = x;
    this.y = y;
    this.cell = cell;
    this.neighbors = [];
  }

  equals(otherCoordinate) {
    return otherCoordinate.equalsCoordinate(this.x, this.y);
  }

  equalsCoordinate(x, y) {
    return this.x === x && this.y === y;
  }

  isNeighbor(otherCoordinate) {
    return otherCoordinate.isNeighborCoordinate(this.x, this.y);
  }

  isNeighborCoordinate(x, y) {
    return !(this.equalsCoordinate(x, y) || Math.abs(x - this.x) > 1 || Math.abs(y - this.y) > 1);
  }

  addNeighbor(coordinate) {
    this.neighbors.push(coordinate);
  }

  getNeighborsCount() {
    return this.neighbors.length;
  }

  hasLiveCell() {
    return this.cell.isAlive();
  }

  changesState() {
    let liveNeighbors = 0;

    this.neighbors.forEach(coordinate => {
      if (coordinate.hasLiveCell()) liveNeighbors += 1;
    });

    return this.cell.changesState(liveNeighbors);
  }

  nextState() {
    if (this.hasLiveCell()) {
      this.cell = Cell.createDead();
    } else {
      this.cell = Cell.createLive();
    }
  }
}

export default Coordinate;
