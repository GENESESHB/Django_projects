document.addEventListener('DOMContentLoaded', function() {
// Récupérer tous les boutons
const boutons = document.querySelectorAll('button');

// Récupérer l'élément où afficher le nom
const varElement = document.getElementById('var');

// Ajouter des écouteurs d'événements pour chaque bouton
boutons.forEach(function(bouton) {
  bouton.addEventListener('mouseover', function() {
    varElement.textContent = bouton.getAttribute('value');
  });
  
  bouton.addEventListener('mouseout', function() {
    varElement.textContent = '';
  });
});

});





