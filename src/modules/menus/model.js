const { fetch, fetchALL } = require("../../lib/postgres");

const RESTAURANT_MENU = `
    SELECT
        *
    FROM
        menu
    WHERE
        restaurant_id = $1;
`;

const sinfgleMnu = `
    SELECT
        *
    FROM
        menu
    WHERE
        menu_id = $1;
`;

const getMenus = (id) => fetchALL(RESTAURANT_MENU, id);
const getOneMenu = (id) => fetch(sinfgleMnu, id);

module.exports = {
  getMenus,
  getOneMenu,
};
