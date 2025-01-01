import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index'

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  lastName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  username: {
    type: new DataTypes.STRING(128),
    allowNull: true,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: true,

  },
}, {
  tableName: 'users',
  sequelize: sequelize, 
});

export default User;
