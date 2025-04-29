const express = require("express");
const app = express();
const sequelize = require("./database");
const Employee = require("./model/employee");
const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");

// app.use(express.json());

// parse application/json
app.use(bodyParser.json());

app.use("/employees", employeeRoutes); //http://localhost:8080/employee-api/employees
app.use("/api/auth", authRoutes);

//Initialize db
sequelize.sync({ force: false }).then(() => {
  console.log("DB Synced");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
