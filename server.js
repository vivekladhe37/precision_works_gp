const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv"); // Import dotenv

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// CORS handling
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// CORS handling for preflight OPTIONS requests
app.options("/contact", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

// Nodemailer configuration using environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE_PROVIDER,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Endpoint to handle form submissions
app.post("/contact", (req, res) => {
  const receivedData = req.body;
  console.log("Received Data on Server:", receivedData);

  // Create email message
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.RECIPIENT_EMAIL,
    subject: "New Form Submission",
    text: `You received a new form submission with the following data:\n\n${JSON.stringify(
      receivedData,
      null,
      2
    )}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Data received successfully and email sent!");
    }
  });
});

// Serve the React app for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
