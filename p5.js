const TAMANHO_BASE = 1000000;

let clusters = 5;
let clusterInput;

const UI_X = 80;
const UI_Y = 180;

const DB_X = 420;
const DB_Y = 160;
const DB_W = 420;
const DB_H = 280;

function formatSpaceThousands(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function setup() {
  pixelDensity(2);
  smooth();
  createCanvas(1280, 720);
  textFont("sans-serif");

  clusterInput = createInput(String(clusters), "number");
  clusterInput.attribute("min", "1");
  clusterInput.attribute("step", "1");
  clusterInput.size(200);
  clusterInput.position(UI_X, UI_Y + 55);

  clusterInput.input(() => {
    const n = int(clusterInput.value());
    clusters = constrain(n || 1, 1, 200);
  });
}

function draw() {
  background(250);

  noStroke();
  fill(20);
  textSize(22);
  textAlign(LEFT, TOP);
  text("Número de clusters", UI_X, UI_Y);

  const n = max(1, clusters);

  drawDatabaseCylinder(DB_X, DB_Y, DB_W, DB_H, n);

  const perCluster = Math.floor(TAMANHO_BASE / n);

  noStroke();
  fill(20);
  textAlign(CENTER, TOP);
  textSize(26);
  text(
    `${formatSpaceThousands(perCluster)} clientes / cluster`,
    DB_X + DB_W / 2,
    DB_Y + DB_H + 24
  );

  fill(40);
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text("Base de dados (1 000 000 clientes)", DB_X + DB_W / 2, DB_Y - 10);
}

function drawDatabaseCylinder(x, y, w, h, n) {
  const topH = 34;
  const bottomY = y + h;

  push();
  const ctx = drawingContext;
  ctx.shadowColor = "rgba(0,0,0,0.12)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 8;

  noStroke();
  fill(255);

  rect(x, y + topH / 2, w, h - topH, 12);
  pop();

  const gap = 4;
  const sliceW = w / n;

  noStroke();
  for (let i = 0; i < n; i++) {
    const x0 = x + i * sliceW;
    const shade = i % 2 === 0 ? 225 : 205;
    fill(shade);
    rect(
      x0 + gap / 2,
      y + topH / 2 + gap / 2,
      sliceW - gap,
      h - topH - gap,
      10
    );
  }

  stroke(0, 40);
  strokeWeight(1.5);
  for (let i = 1; i < n; i++) {
    const lx = x + i * sliceW;
    line(lx, y + topH / 2 + 8, lx, bottomY - topH / 2 - 8);
  }

  noFill();
  stroke(30);
  strokeWeight(4);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  rect(x, y + topH / 2, w, h - topH, 12);

  fill(245);
  noStroke();
  ellipse(x + w / 2, y + topH / 2, w, topH);

  noFill();
  stroke(30);
  strokeWeight(4);
  ellipse(x + w / 2, y + topH / 2, w, topH);

  stroke(30, 130);
  strokeWeight(3);
  arc(x + w / 2, bottomY - topH / 2, w, topH, 0, PI);
}