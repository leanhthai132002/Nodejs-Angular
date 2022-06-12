import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
}, { timestamps: true});
productSchema.index({'$**':'text'})
export default mongoose.model('Product', productSchema);