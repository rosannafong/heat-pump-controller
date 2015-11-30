$(function getPrimaryNav () {
  //Get the template
  var theTemplate = Handlebars.getTemplate('../primary-nav');
  $('.primary-navigation').append (theTemplate);
});