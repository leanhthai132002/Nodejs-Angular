import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/category';
const router = Router();

const check = (req, res, next) => {
    const status = true;
    if(status){
        next();
    } else {
        console.log("Ban khong co quyen truy cap");
    }
}

router.post("/category", create);
router.get("/categories", list);
router.get("/category/:id", read);
router.delete("/category/:id", remove);
router.put("/category/:id", update)
export default router;