import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";
import Expense from "./expense";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    /*firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },*/
    username: {
      type: new DataTypes.STRING(128),
      allowNull: true,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
  }
);

//User.hasMany(Expense, { foreignKey: 'userId', as: 'expenses' });

export default User;
