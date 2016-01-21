import AbstractCell from './abstractCell';

class DeadCell extends AbstractCell {
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

export default DeadCell;
