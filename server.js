const express = require("express");
const sequelize = require("./database");
const Employee = require("./model/employee");
const employeeRoutes = require("./routes/employeeRoutes");
const app = express();

app.use(express.json());
app.use("/employees", employeeRoutes); //http://localhost:8080/employee-api/employees

//Initialize db
sequelize.sync({ force: false }).then(() => {
  console.log("DB Synced");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
