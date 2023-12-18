const Vitals = require('../models/Vitals');

// POST /vitals
exports.createVitals = async (req, res) => {
  const { encounterId, bloodPressure, temperature, pulse, spo2 } = req.body;

  try {
    const newVitals = new Vitals({
      encounterId,
      bloodPressure,
      temperature,
      pulse,
      spo2,
    });
    await newVitals.save();
    res.status(201).json({ message: 'Vitals saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving vitals' });
  }
};
