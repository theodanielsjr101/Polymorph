const Patient = require('../models/Patient');

// POST /patients
exports.createPatient = async (req, res) => {
  const {
    patientId,
    surname,
    othernames,
    gender,
    phoneNumber,
    residentialAddress,
    emergencyName,
    emergencyContact,
    emergencyRelationship,
  } = req.body;

  try {
    const newPatient = new Patient({
      patientId,
      surname,
      othernames,
      gender,
      phoneNumber,
      residentialAddress,
      emergency: {
        name: emergencyName,
        contact: emergencyContact,
        relationship: emergencyRelationship,
      },
    });
    await newPatient.save();
    res.status(201).json({ message: 'Patient created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating patient' });
  }
};
