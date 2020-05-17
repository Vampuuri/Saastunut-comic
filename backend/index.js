var express = require('express');
var cors = require('cors');
var app = express();
var con = require('./databaseConnection');

app.use(cors());

app.get('/characters', function(req,res) {
    con.getConnection(function(err) {
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
                    console.log('Characters fetched')
                    res.send(result);
                }
              });
        }
    })
});

app.get('/characters/main', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id
                WHERE c.mainCharacter = true;`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log('Main characters fetched')
                    res.send(result);
                }
              });
        }
    })
});

app.get('/characters/side', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id
                WHERE c.mainCharacter = false;`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log('Side characters fetched')
                    res.send(result);
                }
              });
        }
    })
});

app.get('/pages', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT p.*, a.username FROM
                page p
                INNER JOIN artist a
                ON p.artistId = a.id
                ORDER BY p.id;`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log('Pages fetched')
                    res.send(result);
                }
              });
        }
    })
});

app.get('/pages/:id([0-9]+)', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT p.*, a.username FROM
                page p
                INNER JOIN artist a
                ON p.artistId = a.id
                WHERE p.id = ${parseInt(req.params.id)};`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    if (result.length === 0) {
                        console.log(`page ${parseInt(req.params.id)} was not found`)
                        res.status(404)
                        res.send({
                            code: 404,
                            message: `Page not found`,
                            description: `Page ${parseInt(req.params.id)} was not found`
                        });
                    } else {
                        console.log(`page ${parseInt(req.params.id)} fetched`)
                        res.send(result);
                    }
                }
              });
        }
    })
});

app.get('/artists', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT * FROM artist`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log(`artists fetched`)
                    res.send(result);
                }
              });
        }
    })
});

app.get('/turns', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT t.*, a.username
                FROM turn t
                INNER JOIN artist a
                ON t.artistId = a.id`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log(`turns fetched`)
                    res.send(result);
                }
              });
        }
    })
});

app.get('/turns/active', function(req,res) {
    con.getConnection(function(err) {
        if (err) {
            throw err;
        } else {
            sql = `SELECT t.*, a.username
                FROM turn t
                INNER JOIN artist a
                ON t.artistId = a.id
                WHERE active = true`
            con.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log(`active turn fetched`)
                    res.send(result);
                }
              });
        }
    })
});

var server = app.listen(3000, function() {
    console.log('Server listening...')
});