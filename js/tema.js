$(document).ready(function(){

$('.btn-original').click(function(original){
  original.preventDefault()
  
  $('.jumbotron').removeClass('dorama')
  $('.jumbotron').removeClass('anime')
  $('.jumbotron').removeClass('novel')
  $('.jumbotron').addClass('original')

})

$('.btn-dorama').click(function(dorama){
  dorama.preventDefault()
  
  $('.jumbotron').removeClass('anime')
  $('.jumbotron').removeClass('novel')
  $('.jumbotron').removeClass('original')
  $('.jumbotron').addClass('dorama')

})

$('.btn-anime').click(function(anime){
  anime.preventDefault()

  $('.jumbotron').removeClass('dorama')
  $('.jumbotron').removeClass('novel')
  $('.jumbotron').removeClass('original')
  $('.jumbotron').addClass('anime')

})

$('.btn-novel').click(function(novel){
  novel.preventDefault()
  
  $('.jumbotron').removeClass('dorama')
  $('.jumbotron').removeClass('anime')
  $('.jumbotron').removeClass('original')
  $('.jumbotron').addClass('novel')


})

})