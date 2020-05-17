var express = require('express');
var cors = require('cors');
var app = express();
var con = require('./databaseConnection');

app.use(cors());

app.get('/characters', function(req,res) {
    con.connect(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id;`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log('Character sent')
                    res.send(result);
                }
              });
        }
    })
});

app.get('/characters/main', function(req,res) {
    con.connect(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id
                WHERE c.mainCharacter = 1;`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log('Character sent')
                    res.send(result);
                }
              });
        }
    })
});

app.get('/characters/side', function(req,res) {
    con.connect(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id
                WHERE c.mainCharacter = 0;`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log('Character sent')
                    res.send(result);
                }
              });
        }
    })
});

/**

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

app.get('/turns/active', function(req,res) {
    var turnsArray = db.get('turns');
    var turn = turnsArray[turnsArray.length - 1];

    if (turn.active) {
        res.send(turn);
    } else {
        res.status(404)
        res.send({
            code: 404,
            message: 'Active turn not found',
            description: 'Active turn was not found'
        })
    }
});

*/

var server = app.listen(3000, function() {
    console.log('Server listening...')
});