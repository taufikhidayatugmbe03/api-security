var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://',
).then(() => {
  console.log('Connect to DB success')
}).catch(err => {
  console.log('Connect to failed ' + err)
})