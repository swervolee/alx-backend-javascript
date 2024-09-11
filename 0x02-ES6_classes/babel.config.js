module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // This targets the current version of Node.js
        },
        useBuiltIns: 'usage', // This option automatically adds polyfills based on usage
        corejs: 3, // Specifies the version of core-js to use for polyfills
        modules: false, // Keeps ES6 module syntax in transpiled code, useful for tree shaking in bundlers
      },
    ],
  ],
};

