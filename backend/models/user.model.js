import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

export default userModel =  model('UserData', userSchema);
