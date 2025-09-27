module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // or 'module:metro-react-native-babel-preset' if not Expo
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // base folder for your aliases
          alias: {
            "@components": "./src/components",
            "@styles": "./src/styles",
            "@api": "./src/api",
            "@constants": "./src/constants",
            "@": "./src"
          }
        }
      ]
    ]
  };
};
