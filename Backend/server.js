const express = require('express');
const app = express();
const port = 8080;
const main = require('./connector');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

main();
app.use('/' , require('./routes/router'));
app.use('/',require('./routes/stripeRoute'));

app.listen(port,()=>{console.log(`server is listening on port ${port}`)})