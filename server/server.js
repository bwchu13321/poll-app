/* Server Installation Checklist
> require Express (and make an instance of express and call it "app" or whatever
> set port
> require model and route index files
> require dependencies
> set up socket io
> use middleware
> serve static files
> establish routes
*/

/* EXPRESS SETUP */
const express = require('express');
const app = express();

/* SOCKET.IO */
const http = require('http').Server(app);
const io = require('socket.io')(http);

/* PORT */
const PORT = process.env.PORT || 1337;
app.set('PORT', PORT);

/* DEPENDENCIES */
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

/* MIDDLEWARE */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(cors());

/* MISC */
app.set('json spaces', 2);

/* STATIC FILES */
app.get('/', express.static(path.join(__dirname, '../src')));

/* MODEL */
// sync models here

/* ROUTING */
// app.use('/api', ROUTER_NAME_HERE);

// MISC
io.on('connection', (socket) => {
  console.log('A user connected.');
});

/* INIT */
http.listen(app.get('port'), () => console.log(`Listening on port ${app.get('PORT')}`));