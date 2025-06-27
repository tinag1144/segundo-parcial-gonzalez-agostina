import express from "express";
import "dotenv/config";


const PORT = process.env.PORT;
const app = express()
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});

