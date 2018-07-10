var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'http://google.com');

var textElement = document.createTextNode('Acesse o google');
linkElement.appendChild(textElement);

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);
