import { loader } from 'pixi.js';

class AssetsLoader {
  static load(boxes, cb) {
    Object.keys(boxes).forEach((key) => {
      loader.add(`${key}-comb`, boxes[key].comb.image);
      loader.add(`${key}-tooth`, boxes[key].tooth.image);
      loader.add(`${key}-toothActive`, boxes[key].tooth.imageActive);
      loader.add(`${key}-cylinder`, boxes[key].cylinder.image);
      loader.add(`${key}-pin`, boxes[key].pin.image);
    });
    loader.load(cb);
  }
}

export default AssetsLoader;
