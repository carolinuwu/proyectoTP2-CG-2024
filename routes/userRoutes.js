import {Router} from 'express'
import UserControllers from "../controllers/userControllers.js";

const userControllers = new UserControllers();

const userRoutes = Router();

//maneja las peticiones http al controller
userRoutes.get("/", userControllers.getAllUsers);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.post("/", userControllers.createUser);
userRoutes.post("/login", userControllers.login);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", userControllers.deleteUser);

export default userRoutes;