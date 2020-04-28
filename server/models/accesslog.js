'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessLog = sequelize.define('AccessLog', {
    type: DataTypes.ENUM({
      values: ['success', 'failure']
    }),
    data: DataTypes.STRING
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
