module.exports = function (wallaby) {

  return {debug:1,
    files: [
      "src/client/modules/**/components/*.tsx",
      "src/client/modules/**/actions/*.ts",
      "src/client/modules/**/containers/*.ts",
      "src/client/modules/**/libs/*.ts",
      "src/typings/**/*.d.ts"
    ],
    tests: [
      "src/client/**/tests/*.ts",
      "src/client/**/tests/*.tsx"
    ],
    compilers: {
      "**/*.ts*": wallaby.compilers.typeScript({module: "commonjs", target: "es6"})
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