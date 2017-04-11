const order = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Assuming note = 'A3' or 'B#6' for example
const noteWeight = note => note.length +
  (order.indexOf(note[0]) * 2) +
  (Number(note[note.length - 1]) * order.length * 3);

const notes = (score) => {
  const notesSet = {};

  score.forEach((note) => {
    notesSet[note.n] = true;
  });

  return Object
    .keys(notesSet)
    .sort((a, b) => noteWeight(a) - noteWeight(b));
};

export default notes;
