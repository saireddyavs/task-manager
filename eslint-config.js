const moduleAlias = require('./aliases'); // Import the centralized alias definition

module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: moduleAlias.aliases, // Use the aliases defined in the centralized definition
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
