const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
  const { nombre, correo, contraseña, telefono, fechaNac } = req.body;
  console.log("telefono: " + telefono)
  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.status(404).json({ mensaje: "Ya existe un usuario con ese correo" });
    
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contraseña: contraseñaHasheada,
            telefono,
            fechaNac
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;