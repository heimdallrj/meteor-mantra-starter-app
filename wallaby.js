module.exports = function (wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.
  var load = require;

  return {
    files: [
      'app/modules/**/components/*.js',
      'app/modules/**/actions/*.js',
      'app/modules/**/containers/*.js',
      'app/modules/**/libs/*.js'
    ],
    tests: [
      'app/**/tests/*.js'
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: load('babel-core'),
         presets: ['es2015', 'stage-2', 'react']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    setup: function() {
      global.React = require('react');
    }
  };
};
