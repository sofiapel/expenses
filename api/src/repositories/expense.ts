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
    //desp hacer una tabla statusType
    type: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    userId: { 
      type: DataTypes.INTEGER, 
      references: {
        model: User, 
        key: "id" 
      } },
    // en caso de type cuota agregar campos
  },
  {
    tableName: "expenses",
    sequelize: sequelize,
  }
);

Expense.belongsTo(User, { foreignKey: "userId", as: "user" });

export default Expense;
