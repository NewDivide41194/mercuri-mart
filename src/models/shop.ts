import { DataTypes } from 'sequelize';
import sequelize from '@/utils/sequelize';

const Shop = sequelize.define('shop', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    shopCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    shopType: {
        type: DataTypes.STRING,
    },
    shopImage: {
        type: DataTypes.TEXT,
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    { freezeTableName: true, timestamps: true });

export default Shop;
