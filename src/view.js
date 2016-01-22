import World from './world';
import { INTERVAL } from './config';

export default class {
  constructor(selector, height, width) {
    this.el = document.querySelectorAll(selector)[0];
    this.height = height;
    this.width = width;
    this.world = new World(this.height, this.width);
    this.el.style.height = (this.height * 10) + 'px';
    this.el.style.width = (this.width * 10) + 'px';
  }

  render() {
    let child;
    while(child = this.el.firstChild) {
      this.el.removeChild(child);
    }
    let fragment = document.createDocumentFragment();
    for (let i = 1; i <= this.width; i++) {
      for (let j = 1; j <= this.height; j++) {
        let node = document.createElement('span');
        let state = (this.world.getCoordinateAt(j, i).hasLiveCell()) ? 'live' : 'dead';
        node.className = `cell cell-${j}-${i} ${state}`;
        fragment.appendChild(node);
      }
    }
    this.el.appendChild(fragment);
  }

  loop() {
    setInterval(x => {
      this.world.tick();
      this.render();
    }, INTERVAL);
  }
}