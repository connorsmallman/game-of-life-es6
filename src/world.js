import Coordinate from './coordinate';
import _ from 'lodash';

export default class {
  constructor(columns = 0, rows = 0) {
    this.create(columns, rows);
  }

  create(columns = 0, rows = 0) {
    this.createCoordinates(columns, rows);
    this.addNeighborsToCoordinates();
  }

  createCoordinates(columns, rows) {
    this.coordinates = [];
    for (let i = 1; i <= columns; i++) {
      for (let j = 1; j <= rows; j++) {
        this.coordinates.push(new Coordinate(i, j));
      }
    }
  }

  addNeighborsToCoordinates() {
    this.coordinates.forEach(coordinate => {
      this.coordinates.forEach(otherCoordinate => {
        if (coordinate.isNeighbor(otherCoordinate)) {
          coordinate.addNeighbor(otherCoordinate);
        }
      });
    });
  }

  tick() {
    _.invokeMap(_.filter(this.coordinates, x => x.changesState()), 'nextState');
    return void 0;
  }

  getCoordinateAt(x, y) {
    return _.find(this.coordinates, c => c.equals(new Coordinate(x, y)));
  }

  coordinatesCount() {
    return this.coordinates.length;
  }
}

