const path=require('path')
require=require('esm')(module);

require('dotenv').config({path:path.join(__dirname,'../env')})
const {AuthServer}=require('./server')
new AuthServer().start()