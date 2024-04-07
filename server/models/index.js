const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://127.0.0.1:27017/my-app", {
    // keepAlive: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

module.exports.User = require('./User');
module.exports.Product = require('./Product');
module.exports.Cart = require('./Cart');