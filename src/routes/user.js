import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
Index -> Lista todos os usuários -> GET
Store/Create -> Cria um novo usuário -> POST
Delete -> Apaga um usuário -> DELETE
Show -> Mostra um usuário -> GET
Update -> Atualiza um usuário -> PATCH ou PUT
*/
