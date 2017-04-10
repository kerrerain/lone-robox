function component () {
  var element = document.createElement('div');

  element.innerHTML = 'Hello Lone Robox!';

  return element;
}

document.body.appendChild(component());