import express from "express";
import { UserController } from "../controller/user.controller";

const userRouter = express.Router();
const userController = new UserController();
userRouter.post("/", async (req, res) => {
    try {
        await userController.createUser(req.body);
        res.status(201).json({ message: "User created successfully" })
    } catch (error: any) {
        res.status(400).json({ message: error })
    }
});
userRouter.get("/", async (req, res) => {
    try {
        const users = await userController.getAllUsers();
        res.send(users)
    } catch (error: any) {
        res.status(500).json({ message: error })
    }
});

userRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userController.getUserDetail(id);
        res.send(user)
    } catch (error: any) {
        res.status(404).json({ message: "User not found" })
    }
});

userRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await userController.updateUser(id, req.body);
        res.status(201).json({ message: "User updated successfully" })
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }
});
userRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await userController.deleteUser(id);
        res.status(201).json({ message: "User delete successfully" })
    } catch (error: any) {
        res.status(500).json({ message: error })
    }
});

export default userRouter;