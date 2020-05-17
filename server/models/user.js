'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
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
