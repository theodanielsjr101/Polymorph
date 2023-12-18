
# Electronic Medical Record System (EMRS) for UGMC

This project implements a backend server API for an Electronic Medical Record System (EMRS) aimed at the University of Ghana Medical Center (UGMC). Built with Node.js, Express, and MongoDB, the API provides functionalities for managing patient data, encounters, and vitals.

# Functional Requirements:

Patient Registration: The front-desk executive can register new patients with information including ID, name, gender, contact details, and emergency contact information.

Encounter Management: The front-desk can start encounters for existing patients, specifying the date, time, and type (emergency, OPD, specialist care).

Vitals Recording: Nurses can submit patient vitals (blood pressure, temperature, pulse, SPO2) associated with an encounter.

Patient Listing: Doctors can retrieve a list of all registered patients.

Patient Details: Doctors can view the full details of a specific patient, including encounters and vitals.

# Technology Stack:

Backend: Node.js, Express
Database: MongoDB
Project Structure:

models: Holds data models for patients, encounters, and vitals.
controllers: Implement logic for API endpoints.
routes: Define URL paths for each API endpoint.
index.js: Application entry point.
README.md: Documentation for the project and API usage.
API Usage:

# The API uses standard RESTful conventions:

**POST`: Create new resources (e.g., patients, encounters)

GET: Retrieve existing resources

PUT/PATCH: Update existing resources

DELETE: Delete existing resources

The specific endpoints and their parameters are documented in the routes and controllers files.

Next Steps:

Develop the frontend application to utilize the API for user interaction.
Implement additional features based on UGMC's specific requirements.
Enhance security and error handling for a robust production environment.
Getting Started:

Clone the project repository.
Install dependencies with npm install.
Configure database connection settings in config.js.
Start the server with node index.js.
Refer to the API documentation in the code and README.md for detailed usage instructions.
Contact:

For further information or feedback, please contact me at theo.danielsjr@gmail.com

