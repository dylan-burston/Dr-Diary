const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.DATABASE_URL, {
=======
mongoose.connect('mongodb://localhost/dr-diary', {
>>>>>>> develop
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
  });

  const db = mongoose.connection;

  db.on('connected', function() {
      console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });