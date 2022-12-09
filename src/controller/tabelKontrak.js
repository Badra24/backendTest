const { Kontak, Pegawai } = require("../lib/sequelize");

const tabelKontrakController = {
  getAllgps: async (req, res) => {
    try {
      const findProduct = await Kontak.findAll({
        include: [Pegawai],
      });
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

      const findGps = await Kontak.findOne({
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
      const { no_kontrak, name } = req.body;

      const CreateGPS = await Kontak.create({
        name,
        no_kontrak,
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

      await Kontak.destroy({
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

      await Kontak.update(
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

module.exports = tabelKontrakController;
