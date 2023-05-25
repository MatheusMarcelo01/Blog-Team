 
// Obtém o elemento pelo ID
var currentYearElement = document.getElementById('current-year');
// Obtém o ano atual
var currentYear = new Date().getFullYear();
// Atualiza o texto do elemento com o ano atual
currentYearElement.textContent = currentYear;
