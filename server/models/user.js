'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: '1'
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  User.associate = function(models) {
    models.User.hasMany(models.Vehicle);
  };
  return User;
};
