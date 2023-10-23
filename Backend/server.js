const express = require('express');
const app = express();
const port = 8080;
const main = require('./connector');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

main();
app.use('/' , require('./router'));

app.listen(port,()=>{console.log(`server is listening on port ${port}`)})