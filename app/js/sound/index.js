import notes from './utils/notes';
import Synth from './synth';
import Sequencer from './sequencer';

class Sound {
  constructor(options) {
    this.synth = new Synth(options);
    this.sequencer = new Sequencer(options);
    this.notes = 1;
  }

  loadOptions(options) {
    this.reset();
    this.synth.loadOptions(options);
    this.sequencer.loadOptions(options);
  }

  loadFile(path) {
    return this.sequencer.loadFile(path).then(() => {
      // Analysis of the score to find how many notes should be displayed
      this.notes = notes(this.sequencer.notes());
    });
  }

  reset() {
    this.notes = 1;
    this.sequencer.reset();
  }
}

export default Sound;
