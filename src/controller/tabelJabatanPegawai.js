const { Jabatan, Pegawai } = require("../lib/sequelize");

const tabelJabatanPegawaiContorller = {
  getAllgps: async (req, res) => {
    try {
      const findProduct = await Jabatan.findAll({});
      res.status(200).json({
        status: "success",
        message: "all Product ",
        result: findProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  },

  getGpsById: async (req, res) => {
    try {
      const { id } = req.params;

      const findGps = await Jabatan.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "fetching data",
        result: findGps,
      });
    } catch (err) {
      console.log(err);

      res.status(400).json({
        message: "error ",
      });
    }
  },
  addGps: async (req, res) => {
    try {
      const { Jabatan } = req.body;

      const CreateGPS = await Jabatan.create({
        Jabatan,
      });

      return res.status(200).json({
        result: CreateGPS,
        message: "new Gps added",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error",
      });
    }
  },
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;

      await Jabatan.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "1 data deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error",
      });
    }
  },
  editPost: async (req, res) => {
    try {
      const { id } = req.params;

      await Jabatan.update(
        {
          ...req.body,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json({
        message: "post edited",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error",
      });
    }
  },
};

module.exports = tabelJabatanPegawaiContorller;
