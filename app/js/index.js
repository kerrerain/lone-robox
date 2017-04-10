(function init(doc) {
  function component() {
    const element = doc.createElement('div');

    element.innerHTML = 'Hello Lone Robox!';

    return element;
  }
  doc.body.appendChild(component());
}(window.document));
