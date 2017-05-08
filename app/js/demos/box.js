import _ from 'lodash';
import { Application } from 'pixi.js';
import Graphics from '../graphics';
import Sound from '../sound';

class DemoBox {
  constructor() {
    this.setupGraphics();
    this.setupSound();
  }

  setupGraphics() {
    this.app = new Application(800, 600, { backgroundColor: 0xffffff });
    this.app.renderer.view.style.position = 'absolute';
    this.app.renderer.view.style.display = 'block';
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.graphics = new Graphics();
    this.app.ticker.add(() => this.graphics.render());
    this.app.ticker.stop();
  }

  setupSound() {
    this.sound = new Sound();
  }

  triggerNote(time, note) {
    const index = this.sound.notes.indexOf(note.name);

    this.graphics.triggerAnimation(index);

    this.sound.sequencer.schedule((timeAhead) => {
      this.graphics.triggerVibration(index);
      this.sound.synth.playNote(timeAhead, note);
    }, `+${this.options.tooth.vibrationDecay}`);
  }

  loadOptions(options) {
    this.options = options;

    this.app.ticker.stop();
    this.app.stage.removeChildren();

    this.sound.loadOptions(options);
    this.sound.sequencer.onNoteEvent((time, note) => this.triggerNote(time, note));
    this.sound.loadFile(options.sequencer.file)
      .then(() => {
        const mergedOptions = _.merge({}, options, {
          comb: {
            teeth: this.sound.notes.length,
          },
        });
        return this.graphics.loadOptions(mergedOptions);
      })
      .then(() => {
        this.graphics.position(0, 0);
        this.graphics.addToContainer(this.app.stage);
        this.app.ticker.start();
      });
  }

  start() {
    this.graphics.start();
    this.sound.sequencer.start();
  }

  stop() {
    this.graphics.reset();
    this.sound.sequencer.stop();
  }

  pause() {
    this.graphics.pause();
    this.sound.sequencer.pause();
  }
}

export default DemoBox;
