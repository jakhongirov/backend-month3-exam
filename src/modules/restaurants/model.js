const { fetch, fetchALL } = require("../../lib/postgres");

const All_RESTAURANTS = `
    SELECT
    *
    FROM
    restaurants;
`;

const BY_CATEGORY = `
    SELECT
        *
    FROM
        restaurants
    WHERE
        restaurant_category = $1;
`;

const getAllRestaurants = () => fetchALL(All_RESTAURANTS);
const getByCategory = (category) => fetchALL(BY_CATEGORY, category);

module.exports = {
  getAllRestaurants,
  getByCategory,
};
