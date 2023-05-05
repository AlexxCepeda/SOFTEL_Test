import express from "express";
import mysql from "mysql"
import cors from "cors"


const app = express()

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"  //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; en caso de no recordar la contraseña

});

db.connect(function (err) {
    if (err) throw err;
    console.log("Conectado");
    db.query("CREATE DATABASE IF NOT EXISTS softel_test", function (err, result) {
        if (err) throw err;
        db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "softel_test"
        });
        db.connect(function (err) {
            if (err) throw err;
            const q = "CREATE TABLE IF NOT EXISTS test (objeto VARCHAR(255), valor integer unsigned, agregado TIME)";
            db.query(q, function (err, result) {
                if (err) throw err;
            });
        });
    });
});


app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    const q = "SELECT * FROM test"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/puerta", (req, res) => {
    const q = "SELECT * FROM test WHERE objeto = 'puerta'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.get("/termometro", (req, res) => {
    const q = "SELECT * FROM test WHERE objeto = 'termometro'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/", (req, res) => {
    const q = "INSERT INTO test (objeto, valor, agregado) VALUES (?)";
    const values = [req.body.objeto, req.body.valor, req.body.agregado]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Added :)")
    })
})
app.listen(8800, () => {
    console.log("Conectado al backend")
})

