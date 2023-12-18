const Encounter = require('../models/Encounter');

// POST /encounters
exports.createEncounter = async (req, res) => {
  const { patientId, date, time, type } = req.body;

  try {
    const newEncounter = new Encounter({
      patientId,
      date,
      time,
      type,
    });
    await newEncounter.save();
    res.status(201).json({ message: 'Encounter started successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error starting encounter' });
  }
};
