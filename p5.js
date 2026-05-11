const Tamanho_base = 1000000
let clusters = 5;
function setup() {
  createCanvas(1280, 720);
  background(255);

  clusterInput = createInput(String(clusters), "number");
  clusterInput.attribute("min", "1");
  clusterInput.attribute("step", "1");
  clusterInput.size(180);
  clusterInput.position(100, 250);

  clusterInput.input(() => {
    const n = int(clusterInput.value());
    clusters = constrain(n || 1, 1, 200); 
    });
}

function draw() {
    
    background(255);

    textSize(24);
    fill(0);
    text(`Número de clusters:`,80, 230);

    noFill();
    stroke(0);
    strokeWeight(6);
    rect(400, 200, 300, 200, 10);

    const n = max(1, clusters);
    const corteW = 300 / n;

    strokeWeight(0);
    for (let i = 0; i < n; i++) {
        const x0 = 400 + i * corteW;
        const shade = (i % 2 === 0) ? 180 : 210;
        fill(shade);
        rect(x0, 200, corteW, 200);
    }

    const perCluster = Math.floor(Tamanho_base / n);

    const formatSpaceThousands = (num) =>
    String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    textSize(24);
    fill(0);
    text(`${formatSpaceThousands(perCluster)} clientes / cluster`, 270 + 300 / 2, 410 + 20);


}