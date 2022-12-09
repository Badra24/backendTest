const { Pegawai } = require("../lib/sequelize");

const tabelPegawaiController = {
  getAllgps: async (req, res) => {
    try {
      const findProduct = await Pegawai.findAll({});
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

      const findGps = await Pegawai.findOne({
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
      const { name } = req.body;

      const CreateGPS = await Pegawai.create({
        name,
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

      await Pegawai.destroy({
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

      await Pegawai.update(
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

module.exports = tabelPegawaiController;
