const express = require("express")
const app = express()
const users = require("../users.json")
const fs = require ("fs")
const passport = require("passport")


const user = require("../users.json")


app.post ('/login' , passport.authenticate("local"), (req , res) => {
  //1.console.log(req.body) cherker info body ;
  //2.console.log(req.user) chechker info user , il doit te retourner ton user au complet grace au serial et desrial;
  
  // 3.je veux que mon user reste connecté pour que je puisse le verifier 
  // laisse mon utilisateur connecte pour qu il soit accessible tout le temps 
  if (req.user){
    // req = je veux que mon user reste conect c grace a logIn que c persistant  

                          // err predefini ,nous n'avons pas la mains dessus , donc soit je me conecte soit je retourne une err     
    req.logIn(req,user , (err) => {
      if (err) {
        console.log(err); 
        res.json(req.user)
      }
    })
  }
})



// Post et non get  avec le Login permet d'avoir un body car on ne crée pas de donné et on ne modifie pas voila pourquoi nous utilison Post pour notre Login 
// on recoit un body et on NE CRREE PAS DE RESSOURCE


// app.post ('/login' , passport.authenticate("local"), (req, res ) =>{
//   if (req.user) {
//     req.logIn(req.user, (err) => {
//       if (err) throw err
//       res.status(200).json(req.user)
//     })
//   }
// })





module.exports = app