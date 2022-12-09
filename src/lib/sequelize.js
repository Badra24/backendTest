const { Sequelize } = require("sequelize");
const dbConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: dbConfig.MYSQL_USERNAME,
  password: dbConfig.MYSQL_PASSWORD,
  database: dbConfig.MYSQL_DB_NAME,
  port: dbConfig.MYSQL_PORT,
  dialect: "mysql",
});

//models
const Pegawai = require("../models/Tabel_Pegawai")(sequelize);
const Jabatan = require("../models/Tabel_jabatan_pegawai")(sequelize);
const Kontak = require("../models/Tabel_kontak")(sequelize);

// 1 : M
Pegawai.belongsTo(Kontak, { foreigKey: "id_pegawai" });
Kontak.hasMany(Pegawai, { foreigKey: "id_pegawai" });

module.exports = {
  sequelize,
  Pegawai,
  Jabatan,
  Kontak,
};
