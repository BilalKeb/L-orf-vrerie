const verifyUser = (req, res, next) => {
  
                                     
    if(req.user){                       //Permet de dire si je suis connecté ou pas . Si j'ai un user dans req.user,  
      next()                     // je veux qu'elle me retourne tous mes users en me retournant la donnees
    } else {
      res.status (401).json({error:"Unauthorizer la buse"}) // je retourne une erreur tu n'as pas le droit d etre a 401 erreur SERVEEUR
    }                           
   }
  
  module.exports = {
    verifyUser
  }