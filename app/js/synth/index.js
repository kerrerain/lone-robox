import Tone from 'tone';

class Synth {
  constructor() {
    this.synth = new Tone.PolySynth(8).toMaster();
  }

  playNote(time, note) {
    this.synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
  }
}

export default Synth;
