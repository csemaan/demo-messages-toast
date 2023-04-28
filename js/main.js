// Saisir l'élément LABEL qui contient le message de UI (toast)
let texteToast = document.querySelector('.texte-toast');

// Saisir la case à cocher associée avec le message de UI (toast)
let ccToast = document.querySelector('#cc-toast');

// Saisir tous les boutons du formulaire
let lesBoutons = document.querySelectorAll('.boutons-formulaire input');

// Associer le gestionnaire d'événement clic avec chaque bouton de formulaire
for(let btn of lesBoutons) {
  btn.addEventListener('click', gererClicBouton);
}

/**
 * Affiche le message de UI adéquat sur le clic d'un bouton.
 * 
 * @param {Event} event : objet Event contenant l'information sur 
 *                        l'événement déclenché.
 */
function gererClicBouton(event) {
  // On s'assure que le haut du document est visible dans le viewport
  // puisque c'est là que nous affichons les messages de UI...
  window.scrollTo(0,0);

  // Décocher la case à cocher pour faire afficher le message "toast"
  ccToast.checked = false;
  
  // OPTIONNEL : Astuce pour redémarrer l'animation à chaque clic
  texteToast.classList.remove('texte-toast');
  texteToast.offsetWidth; // Cette ligne semble inutile, mais est essentielle !
  texteToast.classList.add('texte-toast');
  
  // Supprimer toutes les classes de messages "toast"
  // (On peut aussi faire ça avec une boucle)
  texteToast.classList.remove('info');
  texteToast.classList.remove('avertissement');
  texteToast.classList.remove('erreur');
  texteToast.classList.remove('succes');

  // Associer la classe du bouton avec l'élément du message "toast"
  texteToast.classList.add(event.target.classList[0]);
}