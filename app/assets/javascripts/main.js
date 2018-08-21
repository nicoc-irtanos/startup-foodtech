//= require jquery3
//= require popper
//= require bootstrap-sprockets
function next() {

}

function previous() {
  
}
$(document).ready(function() {
  $('.tablinks:not(:first)').addClass('inactive');
  $('.tabcontent').hide();
  $('.tabcontent:first').show();
  $('.tablinks').click(function(){
    var t = $(this).attr('id');
  
    if($(this).hasClass('inactive')){ //this is the start of our condition 
      $('.tablinks').addClass('inactive');           
      $(this).removeClass('inactive');
  
      $('.tabcontent').hide();
      $('#'+ t + 'c').show();
   }
  });
});
