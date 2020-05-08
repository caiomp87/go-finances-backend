import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tempDirectory = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tempDirectory,

  storage: multer.diskStorage({
    destination: tempDirectory,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
