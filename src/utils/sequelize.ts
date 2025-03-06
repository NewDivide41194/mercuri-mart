import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

// Load environment variables
const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
  dialectModule: mysql2,
  define: {
    underscored: true,  // Automatically converts camelCase to snake_case in the database
    freezeTableName: true, // Keeps table name singular
    timestamps: true,  // Enable createdAt and updatedAt columns if needed
  },

});

export default sequelize;
