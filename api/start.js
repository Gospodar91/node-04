const path=require('path')
require=require('esm')(module);

require('dotenv').config({path:path.join(__dirname,'../env')})
const {AuthServer}=require('./server')
new AuthServer().start()


// MONGODB_URL='mongodb+srv://Gospodar91:ZWBZq7inmJD9zJ7@cluster0-yfhnm.mongodb.net/auth?retryWrites=true&w=majority'
// PORT=3000
// BCRYPT_SALT=5