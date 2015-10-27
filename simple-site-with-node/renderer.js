var fs = require("fs");

function mergeValues(values, content) {
  //cycle over keys of values
  for(var key in values) {
    //replace all {{key}} with value from values obj
    //values.avatarUrl === values["avatarUrl"]
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
}

function view(templateName, values, response) {
  //read from template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  //insert values into content
  fileContents = mergeValues(values, fileContents);
  //write out contents to response
  response.write(fileContents);
}

module.exports.view = view;