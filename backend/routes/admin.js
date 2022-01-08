const express = require ("express")
const app = express()
const { verifyUser } = require("../middlewares/auth")

const users = require ("../users.json")


// je veux proteger cette route , seulment un seul user peut avoir accés au donnees

app.get('/' , verifyUser,(req , res ) =>{  // comment j'ai mis ma logique dans le middelwares je peux alleger mon code
  // 1.console.log(req.user) check ;
  // if(req.user){    --   //Permet de dire si je suis connecté ou pas . Si j'ai un user dans req.user,  
    res.json(users)// je veux qu'elle me retourne tous mes users en me retournant la donnees
  // } else {
    // res.status (401).json({error:"Unauthorizer la buse"}) // je retourne une erreur tu n'as pas le droit d etre a 401 erreur SERVEEUR
  // }                           
 })





// app.get ('/', verifyUser, (req , res) =>{
// fs.readFile('./users.json', (err , data) => {
//   if (err) {
//     console.log(err); 
//   } else {
//     const user = JSON.parse (data)
//     res.json(users)
//   }
//  })
// })

module.exports = app