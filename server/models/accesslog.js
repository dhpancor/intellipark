'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessLog = sequelize.define('AccessLog', {
    plate: DataTypes.STRING,
    hasLeft: {
      type: DataTypes.BOOLEAN,
      default: '0'
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  AccessLog.associate = function(models) {
    models.AccessLog.belongsTo(models.Vehicle, {
      onDelete: "NO ACTION",
      foreignKey: {
        allowNull: true
      }
    })
  };
  return AccessLog;
};
