const bcryptjs=require('bcryptjs')




// async function main(){
// const hash= await bcryptjs.hash('qwerty',5)  //создает хеш
// console.log('hash', hash)
// const resultPass=await bcryptjs.compare("qwerty",hash) // проверяет пароль и хэш
// console.log('resultPass', resultPass)
// }
// main()

const path=require('path')
require=require('esm')(module);

require('dotenv').config({path:path.join(__dirname,'./env')})
const {AuthServer}=require('./api/server')
new AuthServer().start()