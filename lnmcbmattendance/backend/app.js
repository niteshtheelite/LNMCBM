import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectToDb from "./db/db.js"

dotenv.config();
const app = express()
connectToDb();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

 app.get('/', (req, res) => {
   res.send('Hello World');
 });

 export default app;