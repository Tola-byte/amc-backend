import Product from "../../models/products/product.js";

export const getAllProducts = async (req, res) => {
   
    try {
       
        const products = await Product.find();

        
        if (!products.length) {
            return res.status(404).json({ message: 'No products found' });
        }

        
        res.status(200).json({
            message: 'Products retrieved successfully',
            products,
        });
    } catch (error) {
        console.log('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
