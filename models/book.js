import mongoose, { Schema, ObjectId } from "mongoose";
const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
    sale_price:{
        type: Number,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    image_url:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    }
}, { timestamps: true});
bookSchema.index({'$**':'text'})
export default mongoose.model('Book', bookSchema);