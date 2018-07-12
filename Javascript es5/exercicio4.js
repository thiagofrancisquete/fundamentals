/*
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
  // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
*/

function experiencia(anos) {
  if (anos <= 1) {
    console.log('iniciante');
  }
  if (anos < 3 && anos > 1) {
    console.log('intermediario');
  }
  if (anos <= 7 && anos >= 4) {
    console.log('avançado');
  } else {
    console.log('master');
  }
}
var anosEstudo = 4;
experiencia(anosEstudo);