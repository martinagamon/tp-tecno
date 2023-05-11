let x1, y1, x2, y2, x3, y3, x4, y4;
let targetY1, targetY2, targetG1, targetG2, targetL1, targetL2;
let saturationValue = 10; // valor inicial de saturación



function setup() {
  createCanvas(615, 498);

  //puntos de control iniciales y los puntos de destino
  //Curva 1
  x1 = 118;
  y1 = 249;
  x2 = 118;
  y2 = 249;
  x3 = 454;
  y3 = 92;
  x4 = 609;
  y4 = 498;
  //Curva 2
  f1 = 0;
  g1 = 116;
  f2 = 8;
  g2 = 266;
  f3 = 80;
  g3 = 353;
  f4 = 387;
  g4 = 407;
  // 
  //Curva 3
  l1 = 387;
  p1 = 59;
  l2 = 432;
  p2 = 82;
  l3 = 560;
  p3 = 128;
  l4 = 603;
  p4 = 415;

  //puntos de destino iniciales en las coordenadas Y de los puntos de control
  targetY1 = y2;
  targetY2 = y3;

  targetG1 = g2;
  targetG2 = g3;

  targetL1 = p2;
  targetL2 = p3;
}

function draw() {
  background(222, 226, 196);

  //interpola los puntos de control Y hacia los puntos de destino utilizando easing
  let dy1 = targetY1 - y2;
  let dy2 = targetY2 - y3;
  y2 += dy1 * 0.05;
  y3 += dy2 * 0.05;

  let dy3 = targetG1 - g2;
  let dy4 = targetG2 - g3;
  g2 += dy3 - 0.05;
  g3 += dy4 - 0.05;

  let dy5 = targetL1 - p2;
  let dy6 = targetL2 - p3;
  p2 += dy5 * 0.05;
  p3 += dy6 * 0.05;

  //saturación en base a la posición del mouse en el eje Y

  let saturation = map(mouseY, 0, height,255,30);
  
  //curvas de Bezier utilizando los puntos de control y la saturación interpolada
  noFill();
  stroke(102,123,124,50, saturation);
  strokeWeight(6);
  bezier(x1, y1, x2+1, y2+2, x3+2, y3+2, x4+2, y4+5);
  bezier(f1-1, g1, f2-1, g2, f3-1, g3, f4-1, g4);
  bezier(l1-1, p1, l2-1, p2, l3-1, p3, l4-1, p4);
 
  noFill();
  stroke(247, 248, 243, saturation);
  strokeWeight(4);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  bezier(f1, g1, f2, g2, f3, g3, f4, g4);
  bezier(l1, p1, l2, p2, l3, p3, l4, p4);
  
}

function mouseMoved() {
  //ctualiza los puntos de destino en función de la coordenada Y del mouse
  if (mouseX > 0 && mouseX < 615) {
    targetY1 = mouseY;
    targetY2 = mouseY;
    targetG1 = mouseY;}
    
  if (mouseX > 0 && mouseX < 615) {
      targetY2 = mouseY;
      targetG2 = mouseY;
      targetL2 = mouseY;
    }



  }
