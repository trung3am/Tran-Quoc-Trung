import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import userRouter from './router/user.router';
import { AppDataSource } from './datasource';
import { serve, setup } from "swagger-ui-express"
import './swagger.json'
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.static("public"));
app.use(express.json());


AppDataSource.initialize().then(() => {
    console.log("Datasoure initialized");

}).catch(() => {
    console.log("Datasource initialize error");

})
app.get("/", async (req: Request, res: Response) => {
    res.send("Test");
});

app.use("/api/users", userRouter);

app.use('/docs', serve, setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },

}));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
