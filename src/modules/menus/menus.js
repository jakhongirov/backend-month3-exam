const model = require("./model");

module.exports = menu = {
  GET_ALL: async (req, res) => {
    try {
      const { id, menu } = req.query;
      const restaurantMenu = await model.getMenus(id);

      if (menu) {
        const singleMenu = await model.getOneMenu(menu);
        return res.json(singleMenu);
      }
      res.json(restaurantMenu);
    } catch (e) {
      console.log(err);
      res.json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  },
};
