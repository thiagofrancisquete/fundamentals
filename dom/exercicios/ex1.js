var btnElement = document.getElementById('btn');
var containerPai = document.getElementById('app');

btnElement.onclick = function(){
  var quadrado = document.createElement('div');
  quadrado.style.width = '100px';
  quadrado.style.margin = '10px';
  quadrado.style.height = '100px';
  quadrado.style.backgroundColor = '#f00';

  containerPai.appendChild(quadrado);
}