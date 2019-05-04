'use strict';

const express = require('express');
var logger = require('./logger');

// Constants
const PORT = 3008;
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/', (req, res) => {    
    logger.log({level:'info', message:{reqMethod: 'GET', primaryKey: 'nothing'}, tags: 'starting'});
    console.log("----received the request11----");
    logger.log('info', 'MURALI Parameter store', {tags: 'finishes'});
    res.send('Multi test 3008 Paramter test Internal Application!!..\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
