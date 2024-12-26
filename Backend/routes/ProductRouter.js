import express from 'express';
import ensureAuthenticated from '../middlewares/authenticated.js';
import { getAllProducts, addNewProduct } from '../controllers/productController.js'; // Correctly import both controllers
import {upload}  from '../middlewares/multerMiddleware.js';

const router = express.Router();

// Route to get all products (requires authentication)
router.get('/getAllProducts', ensureAuthenticated, getAllProducts);

// Route to add a new product
router.post('/addProducts',  upload.fields([
    {
        name: "image",
        maxCount: 1
    }
]), addNewProduct);

export default router;
