import { Router } from 'express';
import * as productController from '../controllers/productController.js';

const router = Router();

router.route('/create').post(productController.createProduct);
router.route('/update').post(productController.updateProduct);
router.route('/all').get(productController.allProduct);
router.route('/delete/:id').get(productController.deleteProduct);
router.route('/view/:id').get(productController.viewProduct);

export default router;
