import express from "express";
import "dotenv/config";
import { startDb } from "./src/config/database.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, async () => {
    await startDb();
  console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});

