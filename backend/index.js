const express= require("express")
const app = express ()
const port= 5000
const session=require("express-session")
const passport =require("./config/passport")
const authRoutes = require("./routes/auth")  // importation de ma route
const adminRoutes = require("./routes/admin") 
const cors = require ("cors")

app.use(express.json()) // Permet de lire mon body
app.use(cors())
app.use(session({
    secret: "secret",           // string permettant de "signer" nos sessions
    resave: true,               //nous permet de garder notre session toujours a jour
    saveUninitialized: false    // nous permet de sauvegarder notre session
  }))

app.use(passport.initialize())
app.use(passport.session())

// app.use("/login", loginRoutes)  //je demande l'utilisation de ma route 
app.use("/auth", authRoutes)   //Toute mes routes seront préfixè par auth 
app.use("/admin", adminRoutes) 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })