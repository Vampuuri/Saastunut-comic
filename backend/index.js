var con = require('./databaseConnection');

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())
app.use(cors());

//-----------------------------------------------------------------------------------------
// GET MAPPING
//-----------------------------------------------------------------------------------------

app.get('/characters', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id;`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log('Characters fetched')
                    res.send(result);
                }
                connection.release();
              });
        }
    })
});

app.get('/characters/main', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id
                WHERE c.mainCharacter = true;`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log('Main characters fetched')
                    res.send(result);
                }
                connection.release();
              });
        }
    })
});

app.get('/characters/side', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT c.*, a.username FROM
                comicCharacter c
                INNER JOIN artist a
                ON c.artistId = a.id
                WHERE c.mainCharacter = false;`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log('Side characters fetched')
                    res.send(result);
                }
                connection.release();
              });
              
        }
    })
});

app.get('/pages', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT p.*, a.username FROM
                page p
                INNER JOIN artist a
                ON p.artistId = a.id
                ORDER BY p.id;`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log('Pages fetched')
                    res.send(result);
                }
                connection.release();
              });
        }
    })
});

app.get('/pages/:id([0-9]+)', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT p.*, a.username FROM
                page p
                INNER JOIN artist a
                ON p.artistId = a.id
                WHERE p.id = ${parseInt(req.params.id)};`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
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
                    connection.release();
                }
              });
        }
    })
});

app.get('/artists', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT * FROM artist`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log(`artists fetched`)
                    res.send(result);
                }
                connection.release();
              });
        }
    })
});

app.get('/turns', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT t.*, a.username
                FROM turn t
                INNER JOIN artist a
                ON t.artistId = a.id`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log(`turns fetched`)
                    res.send(result);
                }
                connection.release();
              });
        }
    })
});

app.get('/turns/active', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT t.*, a.username
                FROM turn t
                INNER JOIN artist a
                ON t.artistId = a.id
                WHERE active = true`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log(`active turn fetched`)
                    res.send(result);
                    connection.release();
                }
              });
        }
    })
});

app.get('/rounds', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT r.*, t.* , a.username
                FROM round r
                    INNER JOIN turn t
                        ON r.turnId = t.id
                    INNER JOIN artist a
                        ON t.artistId = a.id
                ORDER BY r.number, t.id, pageId;`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log(`rounds fetched`)
                    res.send(result);
                    connection.release();
                }
              });
        }
    })
});

app.get('/rounds/latest', function(req,res) {
    con.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            throw err;
        } else {
            sql = `SELECT r.*, t.* , a.username, MAX(r.number) AS 'latest'
                FROM round r
                    INNER JOIN turn t
                        ON r.turnId = t.id
                    INNER JOIN artist a
                        ON t.artistId = a.id
                WHERE r.number = (SELECT MAX(number) FROM round)
                ORDER BY r.number, t.id, pageId;`
            con.query(sql, function (err, result) {
                if (err) {
                    connection.release();
                    throw err;
                } else {
                    console.log(`active turn fetched`)
                    res.send(result);
                    connection.release();
                }
              });
        }
    })

});

//-----------------------------------------------------------------------------------------
// POST MAPPING
//-----------------------------------------------------------------------------------------

app.post('/pages', function(req,res) {
    var artistId = req.body.artistId;
    var content = req.body.content;
    var date = req.body.date;

    if (artistId && content && date) {
        con.getConnection(function(err, connection) {
            if (err) {
                connection.release();
                throw err;
            } else {
                sql = `INSERT INTO page (artistId, content, date) VALUES
                    (${artistId}, '${content}', '${date}');`
                con.query(sql, function (err, result) {
                    if (err) {
                        connection.release();
                        throw err;
                    } else {
                        console.log(`new page added`)
                        res.send(result);
                        connection.release();
                    }
                  });
            }
        })
    } else {
        res.status(400)
        res.send({
            code: 400,
            message: `Bad body`,
            description: `Request body didn't hold the needed information`
        });
    }
});

//-----------------------------------------------------------------------------------------
// PUT MAPPING
//-----------------------------------------------------------------------------------------

app.put('/pages/:id([0-9]+)', function(req,res) {
    var id = req.params.id;
    var artistId = req.body.artistId;
    var content = req.body.content;
    var date = req.body.date;

    if (artistId && content && date && id) {
        con.getConnection(function(err, connection) {
            if (err) {
                connection.release();
                throw err;
            } else {
                sql = `UPDATE page
                    SET artistId=${artistId}, content='${content}', date='${date}'
                    WHERE id = ${id};`
                con.query(sql, function (err, result) {
                    if (err) {
                        connection.release();
                        throw err;
                    } else {
                        console.log(`page ${id} modified`)
                        res.send(result);
                        connection.release();
                    }
                  });
            }
        })
    } else {
        res.status(304)
        res.send({
            code: 304,
            message: `Bad body`,
            description: `Request body didn't hold the needed information`
        });
    }
});

app.put('/artists/:id([0-9]+)', function(req,res) {
    var id = req.params.id;
    var status = req.body.status;

    if (status && id) {
        con.getConnection(function(err, connection) {
            if (err) {
                connection.release();
                throw err;
            } else {
                sql = `UPDATE artist
                    SET status='${status}'
                    WHERE id = ${id};`
                con.query(sql, function (err, result) {
                    if (err) {
                        connection.release();
                        throw err;
                    } else {
                        console.log(`artist by id ${id} modified`)
                        res.send(result);
                        connection.release();
                    }
                  });
            }
        })
    } else {
        res.status(304)
        res.send({
            code: 304,
            message: `Bad body`,
            description: `Request body didn't hold the needed information`
        });
    }
});

var server = app.listen(3000, function() {
    console.log('Server listening...')
});