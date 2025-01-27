import mongoose from 'mongoose';

import { v4 as uuidv4 } from 'uuid';

const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
            default: () => uuidv4()
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true, 
        toJSON: {
            transform(doc, ret) {
                delete ret.__v; 
                delete ret._id; 
            },
        },
        toObject: {
            transform(doc, ret) {
                delete ret.__v; 
                delete ret._id;
            },
        },
    }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
