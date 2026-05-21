import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/", (req, res) => {
  res.json({
    message: "Backend Running 🚀",
  });
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ إضافة لمعرفة هل البيانات تصل من التطبيق
    console.log(req.body);

    const result = await pool.query(
      `
      INSERT INTO contacts(name, email, message)
      VALUES($1, $2, $3)
      RETURNING *
      `,
      [name, email, message],
    );

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
