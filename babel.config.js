module.exports = {
  presets: [
    "@babel/preset-env",  // Transpiles modern JS to be compatible with older environments
    "@babel/preset-react", // Transforms JSX for React
    "@babel/preset-typescript" // Allows TypeScript code to be compiled by Babel
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",           // Optional chaining support (?.)
    "@babel/plugin-proposal-nullish-coalescing-operator",  // Nullish coalescing support (??)
    ["@babel/plugin-proposal-class-properties", { "loose": true }],   // Class properties with loose mode
    ["@babel/plugin-transform-private-methods", { "loose": true }],  // Private methods in loose mode
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }], // Loose mode for private properties
    ["@babel/plugin-transform-runtime", { "loose": true }] // Optimize helpers to reduce duplication
  ]
};

