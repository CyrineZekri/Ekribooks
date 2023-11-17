const { Router } = require('express');
const multer = require('multer');
const  multerConfig  = require('../middleware/multer');

const routes = Router();

routes.post('/upload', multer(multerConfig).single('file'), (request, response) => {
  console.log(request.file);
  return response.json({ message: 'Img sent' });
});

module.exports = routes;
