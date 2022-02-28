const model = require("./model");

module.exports = restaurants = {
  GET_ALL: async (req, res) => {
    try {
      const { category } = req.query;

      allRestaurants = await model.getAllRestaurants();

      if (category) {
        restaurants = await model.getByCategory(category);
        return res.json(restaurants);
      }

      res.json(allRestaurants);
    } catch (err) {
      console.log(err);
      res.json({
        status: 500,
        message: "Internal Server Error"
      })
    }
  },
};
