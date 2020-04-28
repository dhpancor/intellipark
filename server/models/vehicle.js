'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    plate: DataTypes.STRING,
    initialAccessTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    finalAccessTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
  }, {
    timestamps: true,
    paranoid: true
  });
  Vehicle.associate = function(models) {
    // associations can be defined here
    models.Vehicle.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
    models.Vehicle.hasMany(models.AccessLog);
  };
  return Vehicle;
};
