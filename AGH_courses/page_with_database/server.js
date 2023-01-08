const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const app = express();
const router = express.Router();
const session = require('express-session');
const helmet = require('helmet')

router.use(session({
    secret: 'whatever',
    resave: false,
    saveUninitialized: true
}));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(helmet.contentSecurityPolicy({
    directives: {
        scriptSrc: ["'self'", "'unsafe-inline'"]
    }
}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "script"
});


function authenticate(req, res, next) {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect('/');
    }
}

connection.connect((err) => {
    if (err) {console.log("\nSomething wrong...")}
    else {console.log("\nConnected to script sql database")}
});


app.use(router);

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/welcome-page.html");
});

router.post('/redirect', (req, res) => {
    var page = req.body.parameter;
    res.redirect(page);
})

router.get('/rent', (req, res) => {
    res.sendFile(__dirname + "/rent_page.html");
})

router.post('/rent', (req, res) => {
    var name = req.body.first_name;
    var surname = req.body.surname;
    var time_rent = req.body.time_rent;
    var time_return = "-";
    var model = req.body.model;

    let checkQuery = "SELECT * FROM script.buyers where name = ? and surname = ? and model = ? and time_return = '-' ";
    let magazineCheck = "SELECT * FROM script.magazine where model = ? and amount > 0"
    let insertionQuery = "INSERT INTO script.buyers (name, surname, time_rent, time_return, model) VALUES (?, ?, ?, ?, ?)"
    let updateQuery = "UPDATE script.magazine SET amount = amount - 1 where model = ?"


    connection.query(checkQuery, [name, surname, model], (err, result, fields) => {
        if (result.length > 0) {
            res.send('<script>alert("Bike in use"); window.location.href = "/rent";</script>');
            return;
        }
        if (err) {console.log(err);return}
        else {
        connection.query(magazineCheck, [model], (err, result, fields) => {
            if (result.length <= 0) {
                res.send('<script>alert("Not enough bikes in magazine"); window.location.href = "/rent";</script>');
                return
            }
            if (err) {console.log(err);return}
            else {
            connection.query(insertionQuery, [name, surname, time_rent, time_return, model, model], (err, result, fields) => {
                if (err) {console.log(err);return}
                else {
                    connection.query(updateQuery, [model], (err, result, fields) => {
                        res.send('<script>alert("Bike rented"); window.location.href = "/rent";</script>');
                    })   
                }
            });
            }
        })
        }
    })
})

router.get('/return', (req, res) => {
    res.sendFile(__dirname + "/return_page.html");
})

router.post('/return', (req, res) => {
    var name = req.body.first_name;
    var surname = req.body.surname;
    var time_return = req.body.time_return;
    var model = req.body.model;

    let buyerQuery = "SELECT * FROM script.buyers WHERE name = ? and surname = ? and model = ? and time_return = '-'"
    let endInsertionQuery = "UPDATE script.buyers SET time_return = ? WHERE name = ? and surname = ? and model = ?"
    let updateQuery = "UPDATE script.magazine SET amount = amount + 1 where model = ?"

    connection.query(buyerQuery, [name, surname, model], (err, result, fields) => {
        if (result.length > 0) {
            connection.query(endInsertionQuery, [time_return, name, surname, model], (err, result, fields) => {
                connection.query(updateQuery, [model], (err, result, fields) => {
                    res.send('<script>alert("Bike returned");window.location.href = "/return";</script>');
                    return;
                })
            })
        }
        else {
            res.send('<script>alert("There is no such a rent");window.location.href = "/return";</script>');
            return;
        }

    })

})

router.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login_page.html");
})

router.post('/login', encoder,(req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    var passwdQuery = "SELECT * FROM script.users WHERE user = ? and password = ?"
    connection.query(passwdQuery, [username, password], (err, result, fields) => {
        if (result.length > 0) {
            req.session.loggedIn = true;
            res.redirect("/magazine");
        }
        else {res.send('<script>alert("Invalid username or password!"); window.location.href = "/login";</script>');}
    })
})

router.get("/magazine", authenticate,(req, res) => {
    res.sendFile(__dirname + "/magazine.html")
});

router.post("/magazine", (req, res) => {
    var model = req.body.bike_model;
    var amount = req.body.amount;


    var checkIfAlreadyExistQuery = "SELECT * FROM script.magazine where model = ?";
    var updateQuery = "UPDATE script.magazine SET amount = amount + ? WHERE model = ?"
    var addMagazineQuery = "INSERT INTO script.magazine (model, amount) VALUES (?, ?)"
    
    
    
    connection.query(checkIfAlreadyExistQuery, [model], (err, result, fields) => {
        if (result.length > 0) {
            connection.query(updateQuery, [amount, model], (err, result, fields) => {
                res.send('<script>alert("Amount updated"); window.location.href = "/magazine";</script>');
            })
        }

        else {
            connection.query(addMagazineQuery, [model, amount], (err, result, fields) => {
                res.send('<script>alert("Bikes added"); window.location.href = "/magazine";</script>');
            })
        }

    })
})

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
})

app.listen(3000, () => {
    console.log('App listening on port 3000');
})