const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, // Usar Schema.Types.ObjectId para definir el tipo de _id
    auto: true, // Indicar que se generará automáticamente
  },
  nombre: String,
  correo: String,
  telefono: String,
  contraseña: String,
  fechaNac: Date,
}, {
  collection: 'usuarios', // Nombre de la colección en la base de datos
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;