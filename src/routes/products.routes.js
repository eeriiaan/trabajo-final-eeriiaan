import { Router } from 'express';
import { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    deleteProduct 
} from '../controllers/products.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', verifyToken, getAllProducts);

router.get('/:id', verifyToken, getProductById);

router.post('/create', verifyToken, createProduct);

router.delete('/:id', verifyToken, deleteProduct);

export default router;