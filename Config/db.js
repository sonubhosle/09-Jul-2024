const mongoose = require('mongoose')


const databaseConnection = () =>{

    mongoose.connect(process.env.DB_URi,{family:4})
    .then(()=> console.log('Database : Connect')).catch(err =>{
        console.error("Mongodb : Connection Error",err)
    })
}


module.exports = databaseConnection;