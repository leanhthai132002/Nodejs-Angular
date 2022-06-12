import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true, 
    },
    salt: {
        type: String,
    },
    role: {
        type: Number,
        default: 0,
    },
    password: {
        type: String,
        required: true, 
    }
}, { collection: 'users' });

userSchema.methods = {
    authenticate(password){
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac("sha256","abcs").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}   


userSchema.pre("save", function(next){
    this.password = this.encrytPassword(this.password);
    next();
})

export default mongoose.model('User', userSchema);