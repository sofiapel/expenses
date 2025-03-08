import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";
import User from "./user";

class Expense extends Model {}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: new DataTypes.DECIMAL(),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    type: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    isDeleted: {
      type: new DataTypes.BOOLEAN,
      defaultValue:false
    },
    date: {
      type: new DataTypes.DATE,
      defaultValue: new Date()

    },
    userId: { 
      type: DataTypes.INTEGER, 
      references: {
        model: User, 
        key: "id" 
      } },
  },
  {
    tableName: "expenses",
    sequelize: sequelize,
  }
);

Expense.belongsTo(User, { foreignKey: "userId", as: "user" });

export default Expense;
