// db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mobile_bank_db",
  password: "postgres",
  port: 5432,
});

module.exports = {
  getAtmsData: async () => {
    try {
      const result = await pool.query("SELECT * FROM atms");
      return result.rows;
    } catch (error) {
      console.error("Database error: ", error);
      throw error;
    }
  },

  getActivitiesData: async () => {
    try {
      const result = await pool.query("SELECT * FROM activities");
      return result.rows;
    } catch (error) {
      console.error("Database error: ", error);
      throw error;
    }
  },

  getSlidesData: async () => {
    try {
      const result = await pool.query("SELECT * FROM slides");
      return result.rows;
    } catch (error) {
      console.error("Database error: ", error);
      throw error;
    }
  },

  getUserData: async (id) => {
    try {
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);

      if (result.rows.length === 0) {
        return null;
      }

      let userData = {
        id: result.rows[0].id,
        fullName: result.rows[0].name,
        credential: result.rows[0].name.at(0),
        icon: result.rows[0].icon,
      };
      return userData;
    } catch (error) {
      console.error("Database error: ", error);
      throw error;
    }
  },
};
