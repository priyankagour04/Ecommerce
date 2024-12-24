const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../uploads"); // Temporary folder to store files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
  });

 const upload = multer({storage: storage})

 export const uploadSingle = upload.single("file"); // For single file uploads
export const uploadMultiple = upload.array("files", 5); // For multiple file uploads (max 5 files)