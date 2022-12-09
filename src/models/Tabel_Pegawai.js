const { DataTypes } = require("sequelize");

const Tabel_Pegawai = (sequelize) => {
  return sequelize.define("Tabel_Pegawai", {
    nama: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = Tabel_Pegawai;
