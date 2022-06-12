const express  = require('express')
const mongoose = require('mongoose')

require('dotenv').config()


const appHandler  =()=> {
    const app     = express()

    // TEMPLATE ENGINE - EJS
    app.set('view engine', 'ejs')

    // express body json
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // app static dir /public
    app.use(express.static('public'))
    app.use( require('./general.routes') )

    // Routing
    const router = require('./src/routes')
    app.use(router)

    // Port
    const port = process.env.PORT || 9100
    app.listen(port, () => console.log(`port ${port}!`))
  }

  const errorHandler = (error) => {
    console.error(error)
  }


const DB_HOST = process.env.MONGO_DB || ''
mongoose.connect(DB_HOST)
.then(appHandler)
.catch(errorHandler)