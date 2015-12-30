//-----------------------------------
// Copyright(c) 2015 猫王子
//-----------------------------------

'use strict'

import * as express from 'express';
import * as userController from './userController';

let router = express.Router();

router.get('/users/count', userController.getUserCount);
router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);
router.delete('/users/:port', userController.deleteUser);

module.exports = router;