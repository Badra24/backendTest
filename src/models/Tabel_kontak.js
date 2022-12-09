const { DataTypes } = require("sequelize");

const Tabel_kontrak = (sequelize) => {
  return sequelize.define("Tabel_kontrak", {
    no_kontrak: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Tabel_kontrak;
