import { Router } from "express";
import { creat, list, read, remove, search, update } from "../controllers/product";
import { checkAuth,isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';
import { userById } from "../controllers/user";
const router = Router();

router.get('/products', list);
router.get('/products/:id', read);
router.post('/products', creat);
router.delete('/products/:id', remove);
router.put("/products/:id", update)
router.post("/search", search)     




// router.get('/product', checkAuth, list);
// router.get('/product/:id', checkAuth, read);
// router.post('/products/:userId', requireSignin, isAuth, isAdmin,creat);
// router.delete('/product/:id', checkAuth, remove);
// router.put("/product/:id", checkAuth, update)

router.param ("userId", userById);

export default router;