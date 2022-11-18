import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
    name:  {
        type: String,
        required: true
    },
    descriptio:  {
        type: String,
        required: true
    },
    imgPath:  {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    ingredients: {
        required: true,
        type: [{
            name: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            }
        }]
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
}));