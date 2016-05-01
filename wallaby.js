module.exports = function (wallaby) {

  return {
    files: [
      "src/client/modules/**/components/*.tsx",
      "src/client/modules/**/actions/*.ts",
      "src/client/modules/**/containers/*.ts",
      "src/client/modules/**/libs/*.ts",
      "src/typings/**/*.d.ts",
      "src/client/modules/**/babelCode/*.js"
    ],
    tests: [
      "src/client/**/tests/*.ts",
      "src/client/**/tests/*.tsx",
      "src/client/**/tests/*.js"
    ],
    compilers: {
      "**/*.ts*": wallaby.compilers.typeScript({module: 'es6'}),
      "**/*.js*": wallaby.compilers.babel({presets: ["es2015", "stage-2", "react"]})
    },
    preprocessors: {
      "**/*.js*": file => require("babel-core").transform(file.content, {
        sourceMap: true,
        presets: ["es2015", "stage-2", "react"],
        plugins: ["jsx-control-statements"]
      })
    },
    env: {
      type: "node"
    },
    testFramework: "mocha",
    setup: function () {
      global.React = require("react");

      // Taken from https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
      var jsdom = require('jsdom').jsdom;

      var exposedProperties = ['window', 'navigator', 'document'];

      global.document = jsdom('');
      global.window = document.defaultView;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          exposedProperties.push(property);
          global[property] = document.defaultView[property];
        }
      });

      global.navigator = {
        userAgent: 'node.js'
      };
    }
  };
};