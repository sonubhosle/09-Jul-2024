const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:"../backend/Config/config.env"});

const database = require ('../backend/Config/db');


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});



database();








