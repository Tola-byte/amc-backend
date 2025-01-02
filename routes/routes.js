import { Router } from 'express';
import { productValidation, validateRequest } from '../middlewares/productValidation.js';
import createProduct from '../controllers/products/postProduct.js';
import { editProduct } from '../controllers/products/editProduct.js';
import { deleteProduct } from '../controllers/products/deleteProducts.js';
import { getAllProducts } from '../controllers/products/getAllProducts.js';


const router = Router();


// pattern I used is router.method, then pass the path, middlewares and controllers in there.


router.post('/add-products', productValidation, validateRequest ,createProduct)

router.put('/edit-products/:id', productValidation, validateRequest, editProduct);

router.delete('/delete-products/:id', deleteProduct); 

router.get('/products', getAllProducts);

export default router;
