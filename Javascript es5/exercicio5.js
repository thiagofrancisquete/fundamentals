/*
Dado o seguinte vetor de objetos, escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

var usuarios = [{
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
  }
];

function nomeSkill() {
 for (x of usuarios){
   console.log(`o ${x.nome} possui as habilidades ${x.habilidades}`);
 }
}
nomeSkill();