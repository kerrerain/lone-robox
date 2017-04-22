import Tone from 'tone';

class Synth {
  constructor(options) {
    this.options = options;
    this.synth = new Tone.PolySynth(8, Tone.Synth).toMaster();
    this.synth.set('oscillator', 'sine');
    this.synth.set({
      oscillator: {
        type: 'sine',
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 1.2,
      },
    });
  }

  playNote(time, note) {
    this.synth.triggerAttackRelease(note.name,
      this.options.tooth.vibrationEnd,
      time,
      note.velocity);
  }
}

export default Synth;
