import { Container } from 'pixi.js';
import _ from 'lodash';
import notes from './notes';
import Sequencer from '../sequencer';
import Synth from '../synth';
import Comb from '../comb';

class Box {
  constructor(options, cb) {
    this.synth = new Synth(options);

    this.sequencer = new Sequencer(options);
    this.sequencer.onNoteEvent((time, note) => {
      const index = this.notesToDisplay.indexOf(note.name);

      this.comb.triggerAnimation(index);

      this.sequencer.schedule((timeAhead) => {
        this.comb.triggerVibration(index);
        this.synth.playNote(timeAhead, note);
      }, `+${options.tooth.vibrationDecay}`);
    });

    this.sequencer.loadFile(options.sequencer.file).then(() => {
      // Analysis of the score to find how many notes should be displayed
      this.notesToDisplay = notes(this.sequencer.notes());
      const mergedOptions = _.merge(options, {
        comb: {
          teeth: this.notesToDisplay.length,
        },
      });

      this.comb = new Comb(mergedOptions);

      this.container = new Container();
      this.comb.addToContainer(this.container);

      cb();
    });
  }

  addToContainer(container) {
    container.addChild(this.container);
  }

  position(x, y) {
    this.comb.position(x, y);
  }

  render() {
    this.comb.render();
  }

  start() {
    this.comb.start();
    this.sequencer.start();
  }

  stop() {
    this.comb.reset();
    this.sequencer.stop();
  }

  pause() {
    this.comb.pause();
    this.sequencer.pause();
  }
}

export default Box;
