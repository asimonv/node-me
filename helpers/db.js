require("dotenv").config();

module.exports = {
  DB: {
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    credentials: {
      user: process.env.MONGOLAB_USER,
      pass: process.env.MONGOLAB_PASS
    }
  }
};
