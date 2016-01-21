import { THRESHOLD } from '../config';
import LiveCell from './liveCell';
import DeadCell from './deadCell';

class Cell {
  static createLive() {
    return new LiveCell();
  }

  static createDead() {
    return new DeadCell();
  }

  static createRandom() {
      return (Math.random() >= THRESHOLD) ? Cell.createLive() : Cell.createDead();
  }
}

export default Cell;
