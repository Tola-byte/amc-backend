import express from "express"
import router from "./routes/routes.js";
import cors from 'cors'
import { connectDatabase } from "./services/databaseConnect.js";
const app = express();
const PORT = 1000;

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    })
)

app.use(express.json());

connectDatabase();

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
