const knex = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.baseURL == "http://localhost:3000/"
        ? undefined
        : { rejectUnauthorized: false },
  },
});

console.log("here", process.env.DBhost);

const { attachPaginate } = require("knex-paginate");
attachPaginate();

module.exports = knex;
