import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
    },
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export {Book};

