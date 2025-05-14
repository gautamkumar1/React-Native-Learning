module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
    plugins: [
      "nativewind/babel",
      ["dotenv-import", {
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
      }]
    ],
  };
};
