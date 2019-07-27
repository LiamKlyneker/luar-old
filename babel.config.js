module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        alias: {
          '#pages': './src/pages',
        },
      },
    ],
  ],
};
