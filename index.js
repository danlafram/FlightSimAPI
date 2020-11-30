var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3001

var Coordinates = require('./Coordinates');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/flight', function (req, res) {
    res.send('Got a GET request')
})

app.post('/flight', function (req, res) {
    res.send('Got a POST request')
})

io.on('connection', (socket) => {
    
    console.log('client connected...');
    console.log('Starting pulse...')
    let coordinates = new Coordinates("toronto");

    setInterval(() => {
        socket.emit('pulse', {coordinates: coordinates} );
        coordinates._pulse();
    }, 2500);
});

http.listen(port, () => {
    
})