import express, {Request , Response} from "express"

const app = express()
const PORT = 9000

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Server is running...");
})

app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        status: "ok",
        message: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})