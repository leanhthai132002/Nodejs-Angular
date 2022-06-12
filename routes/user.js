import express from 'express';
import { isAdmin, isAuth, requireSignin } from '../controllers/auth';
import { read, creat, userById, remove, list } from '../controllers/user';
const router = express.Router();

// Trả về thông tin user
router.param('userId', userById);
router.post('/users', creat);
router.delete('/users/:id', remove)
router.get('/users', list)
module.exports = router;