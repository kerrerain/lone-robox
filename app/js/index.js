import { Application, loader, Sprite } from 'pixi.js';

const app = new Application();

function setup() {
  const tooth = new Sprite(loader.resources.tooth.texture);

  tooth.x = app.renderer.width / 2;
  tooth.y = app.renderer.height / 2;

  app.stage.addChild(tooth);
}

loader.add('tooth', 'assets/images/dummy-tooth.png')
  .load(setup);

document.body.appendChild(app.view);
