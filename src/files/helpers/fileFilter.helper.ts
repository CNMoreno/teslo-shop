export const fileFilter = (
  _: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  console.log(file);

  if (!file) return callback(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png'];

  if (validExtensions.includes(fileExtension)) return callback(null, true);

  callback(null, false);
};
