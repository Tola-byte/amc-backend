import Product from "../../models/products/product.js";

export const editProduct = async (req, res) => {
    try {
        const { id } = req.params; 
        const updateData = req.body; 

        
        const product = await Product.findOne({ id: id });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }


        const updatedProduct = await Product.findOneAndUpdate(
            { id: id },
            { $set: updateData }, 
            { new: true, runValidators: true } 
        );

       
        return res.status(200).json({
            message: 'Product updated successfully',
            product: updatedProduct,
        });
    } catch (error) {
        console.log('Error updating product:', error);
        return res.status(500).json({
            message: 'An error occurred while updating the product',
            error: error.message,
        });
    }
};
