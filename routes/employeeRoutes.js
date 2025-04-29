const express = require("express");
const router = express.Router();
const Employee = require("../model/employee");
const authenticateToken = require("../middlewares/authMiddleware");

//BaseUrl = http://localhost:8080

router.use(authenticateToken); // Secure all routes

//ROUTES
//1. POST -- Create
router.post("/", async (req, res) => {
  console.log("we reached here");
  try {
    const newEmployee = Employee.create(req.body);
    res.status(200).json(newEmployee);
  } catch (error) {
    res.status(500).json(error);
  }
});

//2. GET all
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
});

//3. GET by ID
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json(err);
  }
});

//4. PUT -- update
router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);

    if (employee) {
      await employee.update(req.body);
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "Employee Not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//5. DELETE -- remove
router.delete("/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.destroy({
      where: { id: req.params.id },
    });
    if (deletedEmployee) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Employee Not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
