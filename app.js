import express from "express";
import "dotenv/config";
import { startDb } from "./src/config/database.js";
import { Book } from "./src/models/book.model.js";
import { bookRouter } from "./src/routes/book.routes.js";


const PORT = process.env.PORT;
const app = express();
app.use(express.json());
const startServer = async () => {
     await startDb(); 
     await Book.sync(); 
     console.log("Tablas creadas");
     
}

app.use("/api", bookRouter)
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, async () => {
   
  console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});

startServer();