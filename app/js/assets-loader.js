import { loader } from 'pixi.js';

class AssetsLoader {
  static load(options, cb) {
    loader.add('comb', options.comb.image);
    loader.add('tooth', options.tooth.image);
    loader.load(cb);
  }
}

export default AssetsLoader;
