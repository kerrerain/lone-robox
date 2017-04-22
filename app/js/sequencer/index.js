import MidiConvert from 'midiconvert';
import Tone from 'tone';

class Sequencer {
  constructor(options) {
    this.options = options;
    this.part = null;
    this.file = null;
    this.transport = Tone.Transport;
    this.onNoteEventCallbacks = [];
  }

  onNoteEvent(cb) {
    this.onNoteEventCallbacks.push(cb);
  }

  loadFile(path) {
    return new Promise((resolve) => {
      MidiConvert.load(path, (midi) => {
        this.midi = midi;
        this.transport.bpm.value = this.midi.header.bpm;

        this.part = new Tone.Part((time, note) => {
          this.triggerCallbacks(time, note);
        }, this.notes());

        this.part.start();

        this.transport.loop = true;
        this.transport.loopStart = this.midi.startTime;
        this.transport.loopEnd = this.midi.startTime + this.midi.duration +
          this.options.tooth.vibrationDecay;

        resolve();
      });
    });
  }

  notes() {
    return this.midi.tracks[1].notes;
  }

  start() {
    this.transport.start();
  }

  stop() {
    this.transport.stop();
  }

  pause() {
    this.transport.pause();
  }

  triggerCallbacks(time, note) {
    this.onNoteEventCallbacks.forEach((cb) => {
      cb(time, note);
    });
  }

  schedule(cb, time) {
    this.transport.scheduleOnce(cb, time);
  }
}

export default Sequencer;
