const mongoose = require('mongoose');

const databaseConnection = () => {
  mongoose.connect(process.env.DB_CONEXION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(() => console.log(`Database Online`))
    .catch(error => {
      throw new Error(`Database Error`, error);
    })
}

module.exports = {
  databaseConnection
}
