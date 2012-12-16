/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({});

  grunt.registerTask('compile', 'Compile the bookmarklet', function (){
    var bookmarkletify = require('bookmarkletify'),
      fs = require('fs');

    var source = fs.readFileSync('./placekitten_bookmarklet.js')
    var bookmarkletString = bookmarkletify(source.toString());

    fs.writeFileSync('./placekitten_bookmarklet.compiled.js',
                     bookmarkletString)
  });


  // Default task.
  grunt.registerTask('default', 'compile');

  var bookmarkletify = require('bookmarkletify');

};
