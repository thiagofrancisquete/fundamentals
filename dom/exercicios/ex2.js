var btnElement = document.getElementById('btn');
var containerPai = document.getElementById('app');

// cria o quadrado no click
btnElement.onclick = function(){
  var quadrado = document.createElement('div');
  quadrado.style.width = '100px';
  quadrado.style.height = '100px';
  quadrado.style.margin = '10px';
  quadrado.style.backgroundColor = 'f06';

  quadrado.onmouseover = function(){
    quadrado.style.backgroundColor = newColor;
  }
  containerPai.appendChild(quadrado);
}

// gera uma cor aleatoria
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor();