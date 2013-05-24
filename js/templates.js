this["Tmpl"] = this["Tmpl"] || {};

this["Tmpl"]["list_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"tabitha\" tabindex=\"1\"></div>\n\n<ul>\n <li>\n   <form><input tabindex=\"10\" type=\"text\" placeholder=\"Become queen of the universe\"></form>\n </li>\n <li>\n   <form><input tabindex=\"20\" type=\"text\" placeholder=\"Conquer distant galaxies\"></form>\n </li>\n <li>\n   <form><input class=\"populated\" tabindex=\"30\" type=\"text\" placeholder=\"Rule with an iron fist\" value=\"Write the great French treatise\"></form>\n </li>\n <li>\n   <form><input tabindex=\"40\" type=\"text\" placeholder=\"Control the fundamental forces\"></form>\n </li>\n</ul>\n\n<div class=\"tabitha\" tabindex=\"9999\"></div>\n";
  });