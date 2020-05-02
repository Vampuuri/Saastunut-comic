const connection = {
    host: 'YourHostNameHere',
    user: 'YourUsernameHere',
    password: 'YourPasswordHere'
};

// ---------------------- DATA CREATION --------------------------------------

var flatfile = require('flat-file-db');
var db = flatfile('/tmp/temporaryDatabase.db');

var artists = [
    {
        name: 'Vampuuri',
        status: 'Active',
        contact: ['vampuuri.deviantart.com']
    },
    {
        name: 'Vilu',
        status: 'Active',
        contact: []
    },
    {
        name: 'Ghaldun',
        status: 'On hiatus',
        contact: []
    },
    {
        name: 'Sielukorpitar',
        status: 'Resigned',
        contact: []
    },
    {
        name: 'Iarany',
        status: 'Active',
        contact: []
    },
    {
        name: 'Sussur',
        status: 'Active',
        contact: []
    }
]

var turns = [
    {
        id: 0,
        artist: 'Vampuuri',
        round: 1,
        date: new Date(2013, 9, 29),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 1,
        artist: 'Vilu',
        round: 1,
        date: new Date(2013, 10, 16),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 2,
        artist: 'Ghaldun',
        round: 1,
        date: new Date(2013, 10, 29),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 3,
        artist: 'Iarany',
        round: 1,
        date: new Date(2013, 11, 12),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 4,
        artist: 'Sielukorpitar',
        round: 1,
        date: new Date(2014, 0, 6),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 5,
        artist: 'Sussur',
        round: 1,
        date: new Date(2014, 0, 20),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 6,
        artist: 'Vampuuri',
        round: 2,
        date: new Date(2014, 0, 26),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 7,
        artist: 'Vilu',
        round: 2,
        date: null,
        done: false,
        active: false,
        skipped: true
    },
    {
        id: 8,
        artist: 'Ghaldun',
        round: 2,
        date: new Date(2014, 1, 26),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 9,
        artist: 'Iarany',
        round: 2,
        date: null,
        done: false,
        active: false,
        skipped: true
    },
    {
        id: 10,
        artist: 'Sielukorpitar',
        round: 2,
        date: new Date(2014, 2, 15),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 11,
        artist: 'Sussur',
        round: 2,
        date: new Date(2014, 2, 25),
        done: true,
        active: false,
        skipped: false
    },
    {
        id: 12,
        artist: 'Vampuuri',
        round: 3,
        date: new Date(2014, 3, 14),
        done: false,
        active: true,
        skipped: false
    },
]

var pages = [{
    id: 1,
    content: 'http://i.imgur.com/DIE16Ty.png',
    artist: 'Vampuuri',
    date: new Date(2013, 9, 29),
    round: 1
},{
    id: 2,
    content: 'http://i.imgur.com/QIQ6DM8.png',
    artist: 'Vilu',
    date: new Date(2013, 10, 16),
    round: 1
},{
    id: 3,
    content: 'http://i.imgur.com/xJYGe2j.png',
    artist: 'Vilu',
    date: new Date(2013, 10, 16),
    round: 1
},{
    id: 4,
    content: 'http://i.imgur.com/N0ajSap.png',
    artist: 'Ghaldun',
    date: new Date(2013, 10, 29),
    round: 1
},{
    id: 5,
    content: 'http://i.imgur.com/9zg9Uxk.png',
    artist: 'Ghaldun',
    date: new Date(2013, 10, 29),
    round: 1
},{
    id: 6,
    content: 'http://i.imgur.com/dqcSwdl.png',
    artist: 'Ghaldun',
    date: new Date(2013, 10, 29),
    round: 1
},{
    id: 7,
    content: 'http://i.imgur.com/nsQexmA.png',
    artist: 'Ghaldun',
    date: new Date(2013, 10, 29),
    round: 1
},{
    id: 8,
    content: 'http://i.imgur.com/DIE16Ty.png',
    artist: 'Iarany',
    date: new Date(2013, 11, 12),
    round: 1
},{
    id: 9,
    content: 'http://i.imgur.com/L4OiUdm.png',
    artist: 'Sielukorpitar',
    date: new Date(2014, 0, 6),
    round: 1
},{
    id: 10,
    content: 'http://i.imgur.com/9RGmCZm.png',
    artist: 'Sussur',
    date: new Date(2014, 0, 20),
    round: 1
},{
    id: 11,
    content: 'http://i.imgur.com/KzJxw9H.png',
    artist: 'Sussur',
    date: new Date(2014, 0, 20),
    round: 1
},{
    id: 12,
    content: 'http://i.imgur.com/vmP6A0c.png',
    artist: 'Vampuuri',
    date: new Date(2014, 0, 26),
    round: 2
},{
    id: 13,
    content: 'http://i.imgur.com/DIE16Ty.png',
    artist: 'Vampuuri',
    date: new Date(2014, 0, 26),
    round: 2
},{
    id: 14,
    content: 'http://i.imgur.com/UOOzQ4T.png',
    artist: 'Ghaldun',
    date: new Date(2014, 1, 26),
    round: 2
},{
    id: 15,
    content: 'http://i.imgur.com/DIE16Ty.png',
    artist: 'Ghaldun',
    date: new Date(2014, 1, 26),
    round: 2
},{
    id: 16,
    content: 'http://i.imgur.com/VMd3Oow.png',
    artist: 'Ghaldun',
    date: new Date(2014, 1, 26),
    round: 2
},{
    id: 17,
    content: 'http://i.imgur.com/gvAQN3X.png',
    artist: 'Ghaldun',
    date: new Date(2014, 1, 26),
    round: 2
},{
    id: 18,
    content: 'http://i.imgur.com/QZZ4UuP.png',
    artist: 'Sielukorpitar',
    date: new Date(2013, 2, 15),
    round: 2
},{
    id: 19,
    content: 'http://i.imgur.com/rtuMDuU.png',
    artist: 'Sussur',
    date: new Date(2014, 2, 25),
    round: 2
}];

var characters = [
    {
        id: 1,
        name: 'Esti',
        gender: 'Nainen',
        age: 16,
        species: 'Ilves',
        size: 'säkää 75 cm, normaalikokoinen ilves siis',
        nature: 'Lorem ipsum',
        appearance: 'Lorem ipsum',
        history: 'Lorem ipsum',
        reasonToStay: 'Lorem ipsum',
        mainCharacter: true,
        firstAppearance: 0,
        artist: 'Vampuuri'
    },
    {
        id: 6,
        name: 'Keepa',
        gender: 'Mies',
        age: 0,
        species: 'Myskihirvi',
        size: '',
        nature: '',
        appearance: '',
        history: '',
        reasonToStay: '',
        mainCharacter: false,
        firstAppearance: 124,
        artist: 'Iarany'
    }
]

db.on('open', function() {
    db.put('pages', pages);
    db.put('artists', artists);
    db.put('turns', turns);
    db.put('characters', characters);
})

// ---------------------------------SERVER------------------------------------

var express = require('express');
var app = express();

app.get('/characters', function(req,res) {
    res.send(db.get('characters'));
});

app.get('/pages', function(req,res) {
    res.send(db.get('pages'));
});

app.get('/pages/:id([0-9]+)', function(req,res) {
    var pagesArray = db.get('pages');
    var id = parseInt(req.params.id);
    var found = false;

    for (var page of pagesArray) {
        if (page.id === id) {
            found = true;
            res.send(page);
            break;
        }
    }

    if (!found) {
        res.status(404);
        var desc = 'The resource with id = ' + id + ' did not exist';
        res.send({code: 404,
            message: 'Resource not found.',
            description: desc});
    }
});

app.get('/artists', function(req,res) {
    res.send(db.get('artists'));
});

app.get('/turns', function(req,res) {
    res.send(db.get('turns'));
});

var server = app.listen(3000, function() {
    console.log('Server listening...')
});