const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const users = require('./models/users');

require('dotenv').config();
const port = process.env.PORT || '3000';
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/first', (req, res) => {
    res.render('main/home', {name: 'Bill'});
});

app.get('/location/:color/:car', (req, res) => {
    const firstName = 'Jawan'
    const lastName = 'Porter'
    let places = [{city: 'Stamford', state: 'Connecticut'}, {city: 'Rockville', state: 'Maryland'}, {city:'Barnard', state: 'Arizona'}]
    const {color, car} = req.params;
    res.render('main/location', {color, car, places, firstName, lastName})
});
app.get('/users', (req, res) => {
    console.log(users)
    res.render('main/users', {people: users} )
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});