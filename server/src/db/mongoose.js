const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  writeConcern: { w: 'majority', j: true, wtimeout: 1000 },
});
