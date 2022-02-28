const PORT = process.env.PORT || 8000;
connection = {
  connectionStringLocal: "postgres://postgres:jakhongirov@localhost:5432/restaurants",
  connectionStringEL: "postgres://fzhdhjgn:pEFwmjT7fY8PTMJVx6OIO_osmFWmAjDR@tyke.db.elephantsql.com/fzhdhjgn",
};

module.exports = {
  PORT,
  connection,
};
