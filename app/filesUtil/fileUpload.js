import multer from "multer";
import AWS from 'aws-sdk';
import config from "../config";
import fs from "fs";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 's3')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')

const s3 = new AWS.S3({
    accessKeyId: config.s3Config.accessKeyId,
    secretAccessKey: config.s3Config.secretAccessKey,
    region: config.s3Config.region
});

const uploadFile = (buffer, name, type) => {
    const params = {
        ACL: 'public-read',
        Body: buffer,
        Bucket: process.env.S3_BUCKET,
        ContentType: type.mime,
        Key: `${name}.${type.ext}`,
    };
    return s3.upload(params).promise();
};

const s3Upload = (request, response) => {
    const form = new multiparty.Form();
    form.parse(request, async(error, fields, files) => {
        if (error) {
            return response.status(500).send(error);
        };
        try {
            const path = files.file[0].path;
            const buffer = fs.readFileSync(path);
            const type = await FileType.fromBuffer(buffer);
            const fileName = `bucketFolder/${Date.now().toString()}`;
            const data = await uploadFile(buffer, fileName, type);
            return response.status(200).send(data);
        } catch (err) {
            return response.status(500).send(err);
        }
    });
};


const sendFile = (request, response) => {
    const filePath = request.param.file;
    response.sendFile(path.join(filePath));
};

export default { upload, s3Upload, sendFile };