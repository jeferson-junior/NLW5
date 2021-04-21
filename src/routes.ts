import { Router } from "express";
//import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
//import { SettingsRepository } from "./repositories/SettingsRepository";
//import { UsersRepository } from "./repositories/UsersRepository";
import { UsersController } from "./controllers/UsersController";
//import { MessagesRepository } from "./repositories/MessagesRepository";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.get('/', (req, res) => {
    return res.json({
        Rota: " GET /",
    });
})

routes.get('/messages/:id', messagesController.showByUser);

routes.post('/', (req, res) => {
    return res.json({
        Rota: "POST /",
    });
})

routes.post('/messages', messagesController.create);
routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);

export { routes };