const { DataTypes } = require("sequelize");

const Tabel_Jabatan_pegawait = (sequelize) => {
  return sequelize.define("Tabel_Jabatan_pegawait", {
    Jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Tabel_Jabatan_pegawait;
