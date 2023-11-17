const { diskStorage } = require('multer');
const { resolve } = require('path');
const { randomBytes } = require('crypto');

const multerConfig = {
  dest: resolve(__dirname, '..', '..', 'uploads'),
  storage: diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (request, file, callback) => {
      callback(null, file.originalname);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (request, file, callback) => {
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];

    if (formats.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Format not accepted'));
    }
  }
};

module.exports = multerConfig;
