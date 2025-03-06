import sequelize from './sequelize';

export async function initDB() {
  try {
    await sequelize.sync(); // Sync models with the database
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}
