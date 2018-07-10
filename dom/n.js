var btnElement = document.querySelector('button.botao');
var inputElement = document.querySelector('input[name=nome]');
var btnClear = document.querySelector('button.clear');

btnElement.onclick = function() {
  var text = inputElement.value;
  console.log(text);
};

btnClear.onclick = function(){
  console.clear();
}