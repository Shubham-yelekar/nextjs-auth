const conf = {
  mongo_uri: String(process.env.MONGO_URI),
  secret_token: String(process.env.TOKEN_SECRET),
};

export default conf;
