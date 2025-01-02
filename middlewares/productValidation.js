import { body } from 'express-validator';
import { validationResult } from 'express-validator';
export const productValidation = [
    body('name').isString().notEmpty().withMessage('Product name is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').isString().notEmpty().withMessage('Category is required'),
    body('count').isNumeric().optional(),
    body('image').isURL().withMessage('Image URL is required'),
];


export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};