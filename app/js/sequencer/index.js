import MidiConvert from 'midiconvert';
import Tone from 'tone';

class Sequencer {
  constructor() {
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

        this.part = new Tone.Part((time, note) => {
          this.triggerCallbacks(time, note);
        }, this.notes());

        this.part.start();

        this.transport.bpm.value = this.midi.header.bpm;
        this.transport.loop = true;
        this.transport.loopStart = this.midi.startTime;
        this.transport.loopEnd = this.midi.startTime + this.midi.duration;

        resolve();
      });
    });
  }

  notes() {
    return this.midi.tracks[0].notes;
  }

  start() {
    this.transport.start();
  }

  stop() {
    this.transport.stop();
  }

  triggerCallbacks(time, note) {
    this.onNoteEventCallbacks.forEach((cb) => {
      cb(time, note);
    });
  }
}

export default Sequencer;
