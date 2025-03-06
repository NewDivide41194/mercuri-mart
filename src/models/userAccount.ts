import { DataTypes } from 'sequelize';
import sequelize from '@/utils/sequelize';

const UserAccount = sequelize.define('user_account', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  applicationId: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
},
  { freezeTableName: true, timestamps: true });

export default UserAccount;
