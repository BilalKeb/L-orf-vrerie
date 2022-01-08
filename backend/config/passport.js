const passport = require("passport")
const passportLocal = require("passport-local")

const LocalStrategy = passportLocal.Strategy

const users = require("../users.json")  // import des fichier Json

passport.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
  // 1:console.log("je suis dans ma strategielocal"); Checker son code a chaque etape 
  //1console.log(username); Checker son code a chaque etape
  // console.log(password); Checker son code a chaque etape
  //2 Je vais aller chercher dans ma strategie si j'ai bien le meme  username et le password que j'ai 
 // Donc je vais aller le chercher et le  trouver FIND
  const user = users.find(user => user.username === username && user.password === password)
  // Verification que nous recuperons les bonne informations console.log(user) - On reste toujurs dans Postman  raw , Json ,  Body  si tu tape le meme username et le meme password que dans mon fichier Json, il le trouvera si non cela sera undefined  ;
 
  if (!user) {
    return done (null, false) //done est une fonction predefinis par passport qui prend 2 parms , cela permet de renvoyer 401 tu n'est pas autoriser
  }
    return done (null, user) //  va excuter les 2 fonction serialUser et deserialUser qui ont mettre dans mon req.user l'utilisateur que j'ai trouvé


   }))

passport.serializeUser((user, done) => {
  done(null, user.id)

})

passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id)
  done(null, user)
})



module.exports = passport