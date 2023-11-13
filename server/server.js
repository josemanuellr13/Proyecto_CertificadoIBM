const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;


const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");
const { use } = require('bcrypt/promises');
const Usuario = require("./model/usuario");
const bcrypt = require("bcrypt");

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/medicare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Utiliza el middleware cors
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());


// Rutas
app.post("/register", controllers.register);
app.post("/login", controllers.login);

// Modelos
const HealthTip = mongoose.model('HealthTip', {
  title: String,
  description: String,
  image: String
},'health_tips');

const doctor = mongoose.model('Doctor', {
  _id: Number,
  name: String,
  specialty: String,
  years_of_experience: Number,
  rating : Number
},'medical_specialists');

const checkups = mongoose.model('checkup', {
  _id: Number,
  name: String,
  specialty: String,
  years_of_experience: Number,
  rating : Number
},'self_checkups');



const appointment = mongoose.model('Appointment', {
  idDoctor: Number,
  idPacient: String,
  date: Date,
  time : Number,
},'appointments');

// Getters
app.get('/health_tips', async (req, res) => {
  try {
    const healthTips = await HealthTip.find();
    res.json(healthTips[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/usuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findById(id)

    if(usuario){
      res.status(200).json(usuario);
    }else{
      res.status(404).json({ error: "Usuario no encontrado" });
    }
      
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/updateUsuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, updatedData, { new: true });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/updatePassword/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newPassword = req.body.newPassword;

    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    bcrypt.hash(newPassword, 10, async (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      usuario.contraseña = hashedPassword;
      await usuario.save();

      res.status(200).json({ message: "Contraseña actualizada exitosamente" });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/checkups', async (req, res) => {
  try {
    const checkup = await checkups.find();
    res.json(checkup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/medical_specialists', async (req, res) => {
  try {
    const doctors = await doctor.find();
    res.json(doctors[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/medical_specialists/:speciality', async (req, res) => {
  try {
    const speciality = req.params.speciality; // Obtener la especialidad desde la URL
    const allMedicalSpecialists = await doctor.find(); // Supongamos que obtienes todos los especialistas médicos

    const specialistsBySpeciality = allMedicalSpecialists[0].filter(specialist => specialist.speciality === speciality);
    res.json(specialistsBySpeciality);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/a', verifyToken, (req, res) => {
  const userData = req.user;

  res.json({
    userId: userData.id,
    userName: userData.nombre,
    contraseña: userData.contraseña,
    mensaje: "Datos del usuario obtenidos correctamente",
  });
});

// Posts
app.post('/appointments', async (req, res) => {
  try {
    const { idDoctor, idPacient, date, time } = req.body;
    const newAppointment = new appointment({ idDoctor, idPacient, date, time });
    await newAppointment.save();
    res.json(newAppointment);
  } catch (error) {
    console.error('Error al crear la cita', error);
    res.status(500).json({ error: 'Error al agendar la cita' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
