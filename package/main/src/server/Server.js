const express = require("express");
var sql = require("mssql");
var cors = require("cors");
const app = express();
const { InteractiveBrowserCredential, DefaultAzureCredential } = require('@azure/identity');

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
// Set up a port
const PORT = process.env.PORT || 3000;

const credential = new DefaultAzureCredential();

let poolPromise;
async function connectToAzureSQL(retries = 1) {
  try {
    console.log("🔄 Attempting to connect to Azure SQL...");

    const tokenResponse = await credential.getToken("https://database.windows.net");

    const config = {
      server: "cch-server.database.windows.net", // No 'https://'
      database: "clientDemo",
      authentication: {
        type: "azure-active-directory-access-token",
        options: {
          token: tokenResponse.token,
        },
      },
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
    };
      poolPromise = new sql.ConnectionPool(config).connect();
      await poolPromise; // Wait for the connection to establish

      console.log("✅ Successfully connected to Azure SQL!");
    } catch (err) {
      console.error("❌ Database connection failed:", err);
  
      if (retries > 0) {
        console.log(`🔄 Retrying connection (${retries} attempts left)...`);
        setTimeout(() => connectToAzureSQL(retries - 1), 5000); // Retry after 5 seconds
      } else {
        console.error("❌ All retries failed. Please check your configuration.");
      }
    }
}

connectToAzureSQL();


console.log("Starting...");
//retrieve all clients
app.get("/main", async (req, res) => {
  try {
    if (!poolPromise) {
      return res.status(500).send("Database connection is not ready.");
    }

    const pool = await poolPromise; // Get the active connection pool
    const request = pool.request();
    const result = await request.query("SELECT * FROM clientDemographics");

    res.json(result.recordset); // Send JSON response
  } catch (err) {
    console.error("❌ Database query error:", err);
    res.status(500).send("Error fetching data from database.");
  }
});

//add client to database
app.post("/addClient", async (req, res) => {
  try {
    if (!poolPromise) {
      return res.status(503).send("Database connection is not ready.");
    }

    const pool = await poolPromise;
    const { clientID, clientAdmitDate, clientDOB, clientSite, clientFirstName, clientMiddleName, 
      clientLastName, clientAliases, clientCitizenship, clientVetStatus, clientSSN,
      clientGender, clientPronouns, clientEthnicity, clientRace,clientPrimaryLang,clientMaritalStatus,clientReligiousPref,
       clientHighEd
    } = req.body;

    if (!clientFirstName || !clientLastName ) {
      return res.status(400).send("Missing required fields.");
    }

    const query = `

      INSERT INTO clientDemographics (
      clientID,clientAdmitDate, clientDOB, clientSite, clientFirstName, clientMiddleName, clientLastName, clientAliases, 
      clientCitizenship, clientVetStatus, clientSSN,clientGender, clientPronouns, clientEthnicity, clientRace, 
      clientPrimaryLang, clientMaritalStatus, clientReligiousPref, clientHighEd
      
      )
      VALUES (
      @clientID,@clientAdmitDate, @clientDOB, @clientSite,  @clientFirstName, @clientMiddleName, @clientLastName, @clientAliases, 
      @clientCitizenship, @clientVetStatus, @clientSSN, @clientGender, @clientPronouns, @clientEthnicity, @clientRace, 
      @clientPrimaryLang, @clientMaritalStatus, @clientReligiousPref, @clientHighEd

      );
    `;

    const request = pool.request();
    request.input("clientID", sql.NVarChar, clientID);
    request.input("clientAdmitDate", sql.Date, clientAdmitDate);
    request.input("clientDOB", sql.Date, clientDOB);
    request.input("clientSite", sql.NVarChar, clientSite);
    request.input("clientFirstName", sql.NVarChar, clientFirstName);
    request.input("clientMiddleName", sql.NVarChar, clientMiddleName);
    request.input("clientLastName", sql.NVarChar, clientLastName);
    request.input("clientAliases", sql.NVarChar, clientAliases);
    request.input("clientCitizenship", sql.NVarChar, clientCitizenship);
    request.input("clientVetStatus", sql.NVarChar, clientVetStatus);
    request.input("clientSSN", sql.NVarChar, clientSSN);
    request.input("clientGender", sql.NVarChar, clientGender);
    request.input("clientPronouns", sql.NVarChar, clientPronouns);
    request.input("clientRace", sql.NVarChar, clientRace);    
    request.input("clientEthnicity", sql.NVarChar, clientEthnicity);
    request.input("clientPrimaryLang", sql.NVarChar, clientPrimaryLang)
    request.input("clientMaritalStatus", sql.NVarChar, clientMaritalStatus);
    request.input("clientReligiousPref", sql.NVarChar, clientReligiousPref)
    request.input("clientHighEd", sql.NVarChar, clientHighEd)
    await request.query(query);

    res.status(201).json({ message: "Client added successfully!" });
  } catch (err) {
    console.log(err.clientAdmitDate);
    console.error("❌ Error inserting data:", err);
    res.status(500).send("Error inserting data into database.");
  }
});

// ✅ Fetch all clients
app.get("/getClients", async (req, res) => {
  try {
    if (!poolPromise) {
      return res.status(503).send("Database connection is not ready.");
    }

    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM clientDemographics");
    res.json(result.recordset);
  } catch (err) {
    console.error("❌ Error fetching clients:", err);
    res.status(500).json({ error: "Failed to fetch clients." });
  }
});

//Save Client Face Sheet
// ✅ API Route to Save `ClientFace` Data
app.post("/saveClientFace", async (req, res) => {
  try {
      const pool = await sql.connect(config);
      const transaction = new sql.Transaction(pool);
      await transaction.begin();

      const {
          clientContactNum, clientContactAltNum, clientEmail,
          clientEmgContactName, clientEmgContactNum, clientEmgContactRel, clientEmgContactAddress,
          clientMedInsType, clientMedCarrier, clientMedInsNum, clientMedPrimaryPhy,
          clientMedPrimaryPhyFacility, clientMedPrimaryPhyPhone, clientAllergies, clientAllergyComments
      } = req.body;

      // Convert allergies array to a comma-separated string
      const allergiesString = clientAllergies ? clientAllergies.join(", ") : "";

      // ✅ Step 1: Insert into `ClientContactInfo`
      const clientResult = await transaction.request()
          .input("clientContactNum", sql.NVarChar, clientContactNum)
          .input("clientContactAltNum", sql.NVarChar, clientContactAltNum)
          .input("clientEmail", sql.NVarChar, clientEmail)
          .query(`
              INSERT INTO ClientContactInfo (clientContactNum, clientContactAltNum, clientEmail)
              OUTPUT INSERTED.clientID
              VALUES (@clientContactNum, @clientContactAltNum, @clientEmail)
          `);

      const clientID = clientResult.recordset[0].clientID;

      // ✅ Step 2: Insert into `EmergencyContactInfo`
      await transaction.request()
          .input("clientID", sql.Int, clientID)
          .input("clientEmgContactName", sql.NVarChar, clientEmgContactName)
          .input("clientEmgContactNum", sql.NVarChar, clientEmgContactNum)
          .input("clientEmgContactRel", sql.NVarChar, clientEmgContactRel)
          .input("clientEmgContactAddress", sql.NVarChar, clientEmgContactAddress)
          .query(`
              INSERT INTO EmergencyContactInfo (clientID, clientEmgContactName, clientEmgContactNum, clientEmgContactRel, clientEmgContactAddress)
              VALUES (@clientID, @clientEmgContactName, @clientEmgContactNum, @clientEmgContactRel, @clientEmgContactAddress)
          `);

      // ✅ Step 3: Insert into `MedicalInfo`
      await transaction.request()
          .input("clientID", sql.Int, clientID)
          .input("clientMedInsType", sql.NVarChar, clientMedInsType)
          .input("clientMedCarrier", sql.NVarChar, clientMedCarrier)
          .input("clientMedInsNum", sql.NVarChar, clientMedInsNum)
          .input("clientMedPrimaryPhy", sql.NVarChar, clientMedPrimaryPhy)
          .input("clientMedPrimaryPhyFacility", sql.NVarChar, clientMedPrimaryPhyFacility)
          .input("clientMedPrimaryPhyPhone", sql.NVarChar, clientMedPrimaryPhyPhone)
          .input("clientAllergies", sql.NVarChar, allergiesString)
          .input("clientAllergyComments", sql.NVarChar, clientAllergyComments)
          .query(`
              INSERT INTO MedicalInfo (clientID, clientMedInsType, clientMedCarrier, clientMedInsNum, clientMedPrimaryPhy, clientMedPrimaryPhyFacility, clientMedPrimaryPhyPhone, clientAllergies, clientAllergyComments)
              VALUES (@clientID, @clientMedInsType, @clientMedCarrier, @clientMedInsNum, @clientMedPrimaryPhy, @clientMedPrimaryPhyFacility, @clientMedPrimaryPhyPhone, @clientAllergies, @clientAllergyComments)
          `);

      // ✅ Commit Transaction
      await transaction.commit();

      res.status(201).json({ message: "✅ Client Face Data Saved Successfully!", clientID });

  } catch (err) {
      console.error("❌ Error saving client face data:", err);
      res.status(500).json({ error: "Failed to save data." });
  }
});

// ✅ API to Fetch Client Data by `clientID`
app.get("/getClient/:clientID", async (req, res) => {
  try {
      if (!poolPromise) {
        return res.status(503).send("Database connection is not ready.");
      }
      const { clientID } = req.params;
      const pool = await poolPromise;

      // 🔹 Fetch Client Contact Info
      const contactResult = await pool.request()
          .input("clientID", sql.Int, clientID)
          .query("SELECT * FROM ClientContactInfo WHERE clientID = @clientID");
      
      if (contactResult.recordset.length === 0) {
          return res.status(404).json({ error: "Client not found" });
      }

      // 🔹 Fetch Emergency Contact Info
      const emergencyResult = await pool.request()
          .input("clientID", sql.Int, clientID)
          .query("SELECT * FROM EmergencyContactInfo WHERE clientID = @clientID");

      // 🔹 Fetch Medical Info
      const medicalResult = await pool.request()
          .input("clientID", sql.Int, clientID)
          .query("SELECT * FROM MedicalInfo WHERE clientID = @clientID");

      // 🔹 Construct response object
      const clientData = {
          ...contactResult.recordset[0], // ✅ Add Contact Info
          emergencyContact: emergencyResult.recordset[0] || {}, // ✅ Add Emergency Contact
          medicalInfo: medicalResult.recordset[0] || {} // ✅ Add Medical Info
      };

      res.json(clientData);

  } catch (err) {
      console.error("❌ Error fetching client data:", err);
      res.status(500).json({ error: "Failed to fetch client data." });
  }
});

//Save Medical Info
app.post("/saveMedicalInfo", async (req, res) => {
  try {
      const { clientID, clientMedConditions, clientAddMedHistory, clientMedPertinent, clientPreviousLab, clientAllergies } = req.body;
      const pool = await sql.connect(config);

      await pool.request()
          .input("clientID", sql.Int, clientID)
          .input("clientMedConditions", sql.NVarChar, JSON.stringify(clientMedConditions))
          .input("clientAddMedHistory", sql.NVarChar, clientAddMedHistory)
          .input("clientMedPertinent", sql.NVarChar, clientMedPertinent)
          .input("clientPreviousLab", sql.NVarChar, clientPreviousLab)
          .input("clientAllergies", sql.NVarChar, JSON.stringify(clientAllergies))
          .query(`
              INSERT INTO ClientMedicalInfo (clientID, clientMedConditions, clientAddMedHistory, clientMedPertinent, clientPreviousLab, clientAllergies)
              VALUES (@clientID, @clientMedConditions, @clientAddMedHistory, @clientMedPertinent, @clientPreviousLab, @clientAllergies)
          `);

      res.status(201).json({ message: "✅ Medical info saved successfully!" });

  } catch (err) {
      console.error("❌ Error saving medical info:", err);
      res.status(500).json({ error: "Failed to save medical info." });
  }
});

app.post("/saveMedAppointment", async (req, res) => {
  try {
      const { clientID, medApptDate, medApptLoc, medApptType, medApptProv, medApptTranport } = req.body;
      const pool = await sql.connect(config);

      await pool.request()
          .input("clientID", sql.Int, clientID)
          .input("medApptDate", sql.Date, medApptDate)
          .input("medApptLoc", sql.NVarChar, medApptLoc)
          .input("medApptType", sql.NVarChar, medApptType)
          .input("medApptProv", sql.NVarChar, medApptProv)
          .input("medApptTranport", sql.NVarChar, medApptTranport)
          .query(`
              INSERT INTO MedicalAppointments (clientID, medApptDate, medApptLoc, medApptType, medApptProv, medApptTranport)
              VALUES (@clientID, @appointmentDate, @medApptLoc, @medApptType, @medApptProv, @medApptTranport)
          `);

      res.status(201).json({ message: "✅ Appointment saved successfully!" });

  } catch (err) {
      console.error("❌ Error saving appointment:", err);
      res.status(500).json({ error: "Failed to save appointment." });
  }
});

// ✅ API to Fetch All Clients
app.get("/getAllClients", async (req, res) => {
  try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
          SELECT C.clientID, C.clientContactNum, C.clientEmail, 
                 E.clientEmgContactName, M.clientMedInsType 
          FROM ClientContactInfo C
          LEFT JOIN EmergencyContactInfo E ON C.clientID = E.clientID
          LEFT JOIN MedicalInfo M ON C.clientID = M.clientID
      `);
      res.json(result.recordset);

  } catch (err) {
      console.error("❌ Error fetching all clients:", err);
      res.status(500).json({ error: "Failed to fetch clients." });
  }
});

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Node.js app!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});