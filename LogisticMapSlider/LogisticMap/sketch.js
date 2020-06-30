/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let rStart;
let slider;
let reCalc;
let rInc = 0.001;

function setup() {
  createCanvas(700, 450, P2D);

  slider = createSlider(1, 3.99, 1, rInc);
  slider.position(10, 10);
  slider.style('width', '80px');

  reCalc = createButton('Calculate');
  reCalc.position(15, 35);
  reCalc.mousePressed(logisticMap);

  logisticMap();
}

function logisticMap() {
  background(0);

  rStart = slider.value();
  (rStart < 3.5) ? rInc = 0.001 : rInc = 0.0001;
  //Increment r....
  for (let r = rStart; r < 4; r += rInc) {
    let x = Math.random();
    //...use new r to iterate over x
    for (let i = 0; i <= 300; i++) {
      x = r * x * (1 - x);
      if (i > 250) point(map(r, rStart, 4, 0, width), height - map(x, 0, 1, 0, height * 0.8));
    }
    //Display x
    stroke(0, map(x, 0, 1, 0, 255), 0);
  }
  //Display text
  textSize(18);
  fill(0, 255, 0);
  text('Starting Value of r [1- 4]', 100, 28);
}

function draw() {
}