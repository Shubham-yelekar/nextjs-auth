const conf = {
  mongo_uri: String(process.env.MONGO_URI),
  secret_token: String(process.env.TOKEN_SECRET),
  nodemailer_user: String(process.env.NODEMAILER_USER),
  nodemailer_pass: String(process.env.NODEMAILER_PASS),
};

export default conf;
