let pecaPreta = document.querySelector('#pecaPreta');
let pecaBranca = document.querySelector('#pecaBranca');
let posicaoPretaX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let posicaoBrancaX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let posicaoPretaY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let posicaoBrancaY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let exit = document.querySelector('h3');
let menu = document.querySelector('.menu');

let frenteP = document.querySelector('#frenteP');
let trasP = document.querySelector('#trasP');
let direitaP = document.querySelector('#direitaP');
let esquerdaP = document.querySelector('#esquerdaP');

let frenteB = document.querySelector('#frenteB');
let trasB = document.querySelector('#trasB');
let direitaB = document.querySelector('#direitaB');
let esquerdaB = document.querySelector('#esquerdaB');

let vlr1 = pecaPreta.value;
let vlr2 = pecaBranca.value;

exit.addEventListener('click', function () {
  let bg = document.querySelector('.rulesbg');
  let menu = document.querySelector('.menu');
  if (bg.style.display == 'none') {
    bg.style.display = 'flex';
    menu.style.display = 'none';
  } else {
    bg.style.display = 'none';
    menu.style.display = 'block';
  }
});

menu.addEventListener('click', function () {
  let bg = document.querySelector('.rulesbg');
  let menu = document.querySelector('.menu');
  if (bg.style.display == 'none') {
    bg.style.display = 'flex';
    menu.style.display = 'none';
  } else {
    bg.style.display = 'none';
  }
});

frenteP.addEventListener('click', function () {
  if (pecaPreta.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`p${i}` != pecaPreta.value) {
    i++;
  }

  posicaoPretaY[i] = posicaoPretaY[i] + 160;

  console.log(i);
  console.log(posicaoPretaY[i]);

  if (`p${i}` == pecaPreta.value) {
    let peca = document.querySelector(`#p${i}`);
    peca.style.marginTop = `${posicaoPretaY[i]}px`;
  }
});

trasP.addEventListener('click', function () {
  if (pecaPreta.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`p${i}` != pecaPreta.value) {
    i++;
  }

  posicaoPretaY[i] = posicaoPretaY[i] - 160;

  console.log(i);
  console.log(posicaoPretaY[i]);

  if (`p${i}` == pecaPreta.value) {
    let peca = document.querySelector(`#p${i}`);
    peca.style.marginTop = `${posicaoPretaY[i]}px`;
  }
});

direitaP.addEventListener('click', function () {
  if (pecaPreta.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`p${i}` != pecaPreta.value) {
    i++;
  }

  posicaoPretaX[i] = posicaoPretaX[i] + 160;

  console.log(i);
  console.log(posicaoPretaX[i]);

  if (`p${i}` == pecaPreta.value) {
    let peca = document.querySelector(`#p${i}`);
    peca.style.marginLeft = `${posicaoPretaX[i]}px`;
  }
});

esquerdaP.addEventListener('click', function () {
  if (pecaPreta.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`p${i}` != pecaPreta.value) {
    i++;
  }

  posicaoPretaX[i] = posicaoPretaX[i] - 160;

  console.log(i);
  console.log(posicaoPretaX[i]);

  if (`p${i}` == pecaPreta.value) {
    let peca = document.querySelector(`#p${i}`);
    peca.style.marginLeft = `${posicaoPretaX[i]}px`;
  }
});

frenteB.addEventListener('click', function () {
  if (pecaBranca.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`b${i}` != pecaBranca.value) {
    i++;
  }

  posicaoBrancaY[i] = posicaoBrancaY[i] + 160;

  console.log(i);
  console.log(posicaoBrancaY[i]);

  if (`b${i}` == pecaBranca.value) {
    let peca = document.querySelector(`#b${i}`);
    peca.style.marginBottom = `${posicaoBrancaY[i]}px`;
  }
});

trasB.addEventListener('click', function () {
  if (pecaBranca.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`b${i}` != pecaBranca.value) {
    i++;
  }

  posicaoBrancaY[i] = posicaoBrancaY[i] - 160;

  console.log(i);
  console.log(posicaoBrancaY[i]);

  if (`b${i}` == pecaBranca.value) {
    let peca = document.querySelector(`#b${i}`);
    peca.style.marginBottom = `${posicaoBrancaY[i]}px`;
  }
});

direitaB.addEventListener('click', function () {
  if (pecaBranca.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`b${i}` != pecaBranca.value) {
    i++;
  }

  posicaoBrancaX[i] = posicaoBrancaX[i] + 160;

  console.log(i);
  console.log(posicaoBrancaX[i]);

  if (`b${i}` == pecaBranca.value) {
    let peca = document.querySelector(`#b${i}`);
    peca.style.marginLeft = `${posicaoBrancaX[i]}px`;
  }
});
esquerdaB.addEventListener('click', function () {
  if (pecaBranca.value == '') {
    alert('Escolha uma peça antes de mover');
    exit();
  }

  let i = 1;
  while (`b${i}` != pecaBranca.value) {
    i++;
  }

  posicaoBrancaX[i] = posicaoBrancaX[i] - 160;

  console.log(i);
  console.log(posicaoBrancaX[i]);

  if (`b${i}` == pecaBranca.value) {
    let peca = document.querySelector(`#b${i}`);
    peca.style.marginLeft = `${posicaoBrancaX[i]}px`;
  }
});
