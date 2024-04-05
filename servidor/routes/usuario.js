const express = require('express');
const router = express.Router();
var getConnection = require('../conexion')

//Consulta usuario por cédula
router.get('/usuario/:cedula', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            return res.sendStatus(400);
        } else {
            const { cedula } = req.params;
            conn.query('SELECT * FROM usuarios WHERE cedulausuario = ?',
                [cedula], function(err, rows) {
                    if (err) {
                        conn.release();
                        return res.json().status(400).send('No se puede conectar a la base de datos');
                    } else {
                        res.send(rows);
                        conn.release();
                    }
                });
        }
    });
});

//Consulta todos los usuarios
router.get('/usuarios', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos")
        } else {
            conn.query('SELECT * FROM usuarios', function(err, rows){
                if (err) {
                    conn.release();
                    console.log(err);
                } else {
                    res.send(rows);
                    conn.release();
                }
            });
        }
    });
});

//Consulta usuario por ID
router.get('/usuario/getById/:id', (req, res) => {
    getConnection(function(err, conn) {
        if (err) {
            return res.sendStatus(400);
        } else {
            const { id } = req.params;
            conn.query('SELECT * FROM usuarios WHERE idusuario = ?',
                [id], function(err, rows) {
                    if (err) {
                        conn.release();
                        return res.json().status(400).send('No se puede conectar a la base de datos');
                    } else {
                        res.send(rows);
                        conn.release();
                    }
                });
        }
    });
});

//Insertar un usuario
router.post('/usuario', (req, res, next) => {
    const data={
        nombreusuario: req.body.nombreusuario,
        apellidousuario: req.body.apellidousuario,
        cedulausuario: req.body.cedulausuario,
        telefonousuario: req.body.telefonousuario,
        direccionusuario: req.body.direccionusuario,
        correousuario: req.body.correousuario
    };
    const query = "INSERT INTO usuarios (nombreusuario, apellidousuario, cedulausuario, telefonousuario,"+
        "direccionusuario, correousuario) VALUES (\'"+data.nombreusuario+"\',\'"+data.apellidousuario+
        "\',\'"+data.cedulausuario+"\',\'"+data.telefonousuario+"\',\'"+data.direccionusuario+
        "\',\'"+data.correousuario+"\')";
        console.log(query);
        getConnection(function(err, conn) {
            if (err) {
                console.log("No se puede conectar a la Base de Datos")
            } else {
                conn.query(query, function(err, rows) {
                        if (!err) {
                            res.json({status: "Registro exitoso"});
                        } else {
                            console.log(err);
                            res("no se pudo hacer la inserción: " + err.message)
                        }
                    });
            }
        });
});

// Actualizar un usuario por ID
router.put('/usuario/update/:id', (req, res) => {
    const { id } = req.params;
    const data = {
        nombreusuario: req.body.nombreusuario,
        apellidousuario: req.body.apellidousuario,
        cedulausuario: req.body.cedulausuario,
        telefonousuario: req.body.telefonousuario,
        direccionusuario: req.body.direccionusuario,
        correousuario: req.body.correousuario
    };
    const query = `UPDATE usuarios SET nombreusuario = ?, apellidousuario = ?, cedulausuario = ?,
            telefonousuario = ?, direccionusuario = ?, correousuario = ? WHERE idusuario = ?`;
    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos");
            res.status(500).json({ error: 'Error de conexión a la base de datos' });
        } else {
            conn.query(query, [data.nombreusuario, data.apellidousuario, data.cedulausuario,
                data.telefonousuario, data.direccionusuario, data.correousuario, id],
                function(err, result) {
                if (err) {
                    conn.release();
                    console.log(err);
                    res.status(500).json({ error: 'Error al actualizar el usuario' });
                } else {
                    if (result.affectedRows > 0) {
                        res.json({ status: 'Usuario actualizado exitosamente' });
                    } else {
                        res.status(404).json({ error: 'Usuario no encontrado' });
                    }
                    conn.release();
                }
            });
        }
    });
});

// Eliminar un usuario por ID
router.delete('/usuario/delete/:id', (req, res) => {
    const { id } = req.params;

    getConnection(function(err, conn) {
        if (err) {
            console.log("No se puede conectar a la Base de Datos");
            res.status(500).json({ error: 'Error de conexión a la base de datos' });
        } else {
            const query = 'DELETE FROM usuarios WHERE idusuario = ?';

            conn.query(query, [id], function(err, result) {
                if (err) {
                    conn.release();
                    console.log(err);
                    res.status(500).json({ error: 'Error al eliminar el usuario' });
                } else {
                    if (result.affectedRows > 0) {
                        res.json({ status: 'Usuario eliminado exitosamente' });
                    } else {
                        res.status(404).json({ error: 'Usuario no encontrado' });
                    }
                    conn.release();
                }
            });
        }
    });
});




module.exports = router;
