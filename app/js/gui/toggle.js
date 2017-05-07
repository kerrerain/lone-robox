export default function toggle(cb) {
  this.data('toggle', false);
  this.on('click', () => {
    this.data('toggle', !this.data('toggle'));

    if (this.data('toggle') === false) {
      this.text('Play');
    } else {
      this.text('Pause');
    }

    cb(this.data('toggle'));
  });

  this.reset = function reset() {
    this.data('toggle', false);
    this.text('Play');
  };

  return this;
}
