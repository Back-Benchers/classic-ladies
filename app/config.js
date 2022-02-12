const dbConfig = {
    HOST: "classic-free.cwhlhl9ooiyq.us-east-2.rds.amazonaws.com",
    PORT: "3306",
    USER: "admin",
    PASSWORD: "rg5425261",
    DB: "CLASSIC",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const s3Config = {
    accessKeyId: "AWS_ACCESS_KEY_ID",
    secretAccessKey: "AWS_SECRET_ACCESS_KEY",
    bucket: "S3Bucket",
    region: 'us-west-2'
}

const jwtSecretKey = "swallaalao"

export default { dbConfig, s3Config, jwtSecretKey };