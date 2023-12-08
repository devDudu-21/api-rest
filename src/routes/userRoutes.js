import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
Index -> Lista todos os usuários -> GET
Store/Create -> Cria um novo usuário -> POST
Delete -> Apaga um usuário -> DELETE
Show -> Mostra um usuário -> GET
Update -> Atualiza um usuário -> PATCH ou PUT
*/
