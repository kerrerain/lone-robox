import notes from './notes';
import score from '../../assets/scores/melody';
import Sequencer from '../sequencer';
import Comb from '../comb';

class Box {
  constructor(defaultOptions) {
    // Analysis of the score to find how many notes should be displayed
    const notesToDisplay = notes(score);
    const options = Object.assign(defaultOptions, {
      comb: {
        teeth: notesToDisplay.length,
        scale: defaultOptions.comb.scale,
      },
    });

    this.comb = new Comb(options);

    this.sequencer = new Sequencer();
    this.sequencer.load(score);
    this.sequencer.onNoteEvent((note) => {
      const index = notesToDisplay.indexOf(note.n);
      this.comb.triggerAnimation(index);
    });

    this.sequencer.play();
  }

  addToContainer(container) {
    this.comb.addToContainer(container);
  }

  position(x, y) {
    this.comb.position(x, y);
  }

  render() {
    this.comb.render();
  }
}

export default Box;
