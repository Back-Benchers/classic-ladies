const dbConfig = {
    HOST: "postgres",
    PORT: "5432",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "app",
    dialect: "postgres",
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