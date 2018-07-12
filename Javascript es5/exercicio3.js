/**
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
  // código aqui
}
var skills = ['Javascript', 'ReactJS', 'React Native'];
temHabilidade(skills); // true ou false
*/
function temHabilidade(skills, item) {
 return (skills.indexOf(item) >= 0);
}

var skills = ['javascript', 'react', 'react native'];
var resultado = temHabilidade(skills, 'javascript');
console.log(resultado);