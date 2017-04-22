import { loader } from 'pixi.js';

class AssetsLoader {
  static load(options, cb) {
    loader.add('comb', options.comb.image);
    loader.add('tooth', options.tooth.image);
    loader.add('toothActive', options.tooth.imageActive);
    loader.add('cylinder', options.cylinder.image);
    loader.add('pin', options.pin.image);
    loader.add('buttonPlay', options.buttons.play.image);
    loader.add('buttonStop', options.buttons.stop.image);
    loader.add('buttonPause', options.buttons.pause.image);
    loader.load(cb);
  }
}

export default AssetsLoader;
