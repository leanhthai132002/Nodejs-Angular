import { Router } from "express";
import { creat, list, read, remove, search, update } from "../controllers/book";
import { checkAuth,isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';
import { userById } from "../controllers/user";
const router = Router();

router.get('/books', list);
router.get('/books/:id', read);
router.post('/books', creat);
router.delete('/books/:id', remove);
router.put("/books/:id", update)
router.post("/search", search)     

router.param ("userId", userById);

export default router;