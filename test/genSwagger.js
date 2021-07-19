const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: './',
  serversPath: '../servers',
  projectName: 'peck',
});
