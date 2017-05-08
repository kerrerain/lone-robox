import Tone from 'tone';

class Synth {
  constructor() {
    this.synth = new Tone.PolySynth(8, Tone.FMSynth).toMaster();
    this.synth.set({
      harmonicity: 8,
      modulationIndex: 2,
      oscillator: {
        type: 'sine',
      },
      envelope: {
        attack: 0.001,
        decay: 2,
        sustain: 0.1,
        release: 2,
      },
      modulation: {
        type: 'square',
      },
      modulationEnvelope: {
        attack: 0.002,
        decay: 0.2,
        sustain: 0,
        release: 0.7,
      },
    });
  }

  loadOptions(options) {
    this.options = options;
  }

  playNote(time, note) {
    this.synth.triggerAttackRelease(note.name,
      this.options.tooth.vibrationEnd,
      time,
      note.velocity);
  }
}

export default Synth;
