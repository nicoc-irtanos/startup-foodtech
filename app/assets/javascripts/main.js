//= require jquery3
//= require popper
//= require bootstrap-sprockets
$(document).ready(function() {
  // pour init les tabs
  $('.tablinks:not(:first)').addClass('inactive');
  $('.tabcontent').hide();
  $('.tabcontent:first').show();

  // lorsque l'on clique sur une tab
  $('.tablinks').click(function(){
    var t = $(this).attr('id');

    if($(this).hasClass('inactive')){ //this is the start of our condition 
      $('.tablinks').addClass('inactive');           
      $(this).removeClass('inactive');
  
      $('.tabcontent').hide();
      $('#'+ t + 'c').show();
   }
  });

  // partie pour le carousel
  var $carousel = $('.slide'),
  $img = $('.slide img'),
  $indexImg = $img.lenght - 1,
  i = 0
  $currentImg = $img.eq(i);

  $img.css('display', 'none'); // on cache les images
  $currentImg.css('display', 'block'); // on affiche seulement l'image courante

  // partie controle du slide 
  $('.next').click(function(){ // image suivante
    i++; // on incrémente le compteur
    if (i > 2) {
      i = 0
    }
    $img.css('display', 'none'); // on cache les images
    $currentImg = $img.eq(i); // on définit la nouvelle image
    $currentImg.css('display', 'block'); // puis on l'affiche
  });

  $('.prev').click(function(){ // image précédente
      i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
      if (i < 0) {
        i = 2
      }
      $img.css('display', 'none');
      $currentImg = $img.eq(i);
      $currentImg.css('display', 'block');
  });

  // pour les fucking rond
  $('.inner_rond').click(function(){
    $img.css('display', 'none'); // on cache les images
    $currentImg = $img.eq($(this).attr('id') - 1)
    $currentImg.css('display', 'block');
  });

  // fucking mother timeout
  setInterval(function(){ // fucking rien à battre, je recopie le même fucking code
    i++; 
    if (i > 2) {
      i = 0
    }
    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');
  },5000)
});
