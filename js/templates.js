Handlebars.getTemplate = function(name) {
  //console.log("templates function working");
  if(Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
    //console.log("template undefined");
    $.ajax({
      url: '../js/templates/' + name + '.hbs',
      success : function(data) {
        //console.log("success compiling template");
        if(Handlebars.templates === undefined) {
          Handlebars.templates = {};
        }
      Handlebars.templates[name] = Handlebars.compile(data);
      },
    async : false
    });
  }
  return Handlebars.templates[name];
};