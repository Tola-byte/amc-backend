import Product from "../../models/products/product.js";

export const deleteProduct = async (req, res) => {
    const { id } = req.params; 

    try {
      
        const product = await Product.findOneAndDelete({ id: id });
      
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
            product,
        });
    } catch (error) {
        console.log('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
