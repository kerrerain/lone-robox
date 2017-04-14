import { Container } from 'pixi.js';
import _ from 'lodash';
import notes from './notes';
import score from '../../assets/scores/melody';
import Sequencer from '../sequencer';
import Comb from '../comb';

class Box {
  constructor(defaultOptions) {
    // Analysis of the score to find how many notes should be displayed
    const notesToDisplay = notes(score);
    const options = _.merge(defaultOptions, {
      comb: {
        teeth: notesToDisplay.length,
      },
    });

    this.comb = new Comb(options);

    this.sequencer = new Sequencer();
    this.sequencer.load(score);
    this.sequencer.onNoteEvent((note) => {
      const index = notesToDisplay.indexOf(note.n);
      this.comb.triggerAnimation(index);
    });

    this.container = new Container();
    this.comb.addToContainer(this.container);

    this.sequencer.play();
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
}

export default Box;
