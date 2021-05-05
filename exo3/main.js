let solution = Math.floor(Math.random(1 < 100) * 100) + 1;
  let NombreEssai = 0;
  let essai = function() {
    let proposition = Number($('#proposition')[0].value)
    if (proposition === solution) {
      $('#alert').text("Bravo, la solution est " + solution + ". Vous avez trouvé en " + NombreEssai + " essai(s).");
    } else if (proposition < solution) {
      NombreEssai ++;
      $('#alert').text(proposition + " est trop petit.")
    } else if (proposition > solution) {
      NombreEssai ++;
      $('#alert').text(proposition + " est trop grand.")
    }
    if(NombreEssai === 6) $('#alert').append('vous avez perdu, la solution était ' + solution);
  }

  $( "#form" ).submit(function( event ) {
    event.preventDefault();
    essai();
  });

//if(isNaN(proposition) == false) {
//}else {
//alert(merci de rentrer des chiffres);
//}
