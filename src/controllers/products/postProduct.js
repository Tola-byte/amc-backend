import Product from "../../models/products/product.js";
import { validationResult } from 'express-validator';

export const createProduct = async (req, res) => {

    try {
       
        const { name, price, category, count, image } = req.body;

       
        const newProduct = new Product({
            name,
            price,
            category,
            count,
            image,
        });

        
        const product = await newProduct.save();

       
        return res.status(201).json({
            message: 'Product created successfully!',
            product,
        });
    } catch (error) {
        console.log('Error creating product:', error);
        return res.status(500).json({
            message: 'Error creating product, please try again later.',
            error: error.message,
        });
    }
};

export default createProduct;