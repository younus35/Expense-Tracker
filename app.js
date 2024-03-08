const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const sequelize = require('./util/database');

const app = express();
app.use(cors());

const expenseRoutes = require('./routes/expense');

app.use(bodyParser.json({extended: false}));

app.use('/user',expenseRoutes);

sequelize
.sync()
.then(result =>{
    //console.log(result);
    app.listen(3000)
})
.catch( err => console.log(err));