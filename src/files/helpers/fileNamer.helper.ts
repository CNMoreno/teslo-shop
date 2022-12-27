import { v4 as uuid } from 'uuid';
export const fileNamer = (
  _: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error, filename: string) => void,
) => {
  if (!file) return callback(new Error('File is empty'), 'Error');

  const fileExtension: string = file.mimetype.split('/')[1];

  const fileName = `${uuid()}.${fileExtension}`;

  callback(null, fileName);
};
