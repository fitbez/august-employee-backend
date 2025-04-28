const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Employee = sequelize.define(
  "Employee",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
    callOffice: {
      type: DataTypes.STRING,
    },
    callMobile: {
      type: DataTypes.STRING,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = Employee;
