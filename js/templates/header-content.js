$(function () {
  //Get the template
  var theTemplate = Handlebars.getTemplate('header-content');
  $('header').append (theTemplate);
});