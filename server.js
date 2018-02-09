const express = require('express');

const app = express();

const user = {
    name: 'Sally',
    hobby: 'soccer'
}

app.use((req, res, next) => {
    console.log('<h1>Helloooo</h1>')
    next();
});

app.get('/', (req, res) => {
    res.send('testest');
})

app.get('/profile', (req, res) => {
    res.send('getting profile');
})

app.listen(3001);