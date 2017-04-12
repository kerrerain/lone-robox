import { loader } from 'pixi.js';

class AssetsLoader {
  static load(options, cb) {
    loader.add('comb', options.comb.image);
    loader.add('tooth', options.tooth.image);
    loader.add('cylinder', options.cylinder.image);
    loader.add('pin', options.pin.image);
    loader.load(cb);
  }
}

export default AssetsLoader;
