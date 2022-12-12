const { BOOLEAN } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Roles extends Model { };

Roles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "roles",
  }
)

module.exports = Roles