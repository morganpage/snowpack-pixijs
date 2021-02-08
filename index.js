import * as PIXI from 'pixi.js';
let canvasSize = 256;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
  view:canvas,
  width: canvasSize,
  height:canvasSize,
  backgroundColor: 0x1099bb
});

let squareWidth = 64;
const square = new PIXI.Sprite(PIXI.Texture.WHITE);
square.anchor.set(0.5);
square.position.set(app.screen.width / 2, app.screen.height / 2);
square.width = squareWidth;
square.height = squareWidth;
square.tint = '0x00FF00';

app.stage.addChild(square);

