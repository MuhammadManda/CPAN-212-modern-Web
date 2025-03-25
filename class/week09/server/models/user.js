import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
    },
});

const user = mongoose.model("users", userSchema)

export default user;