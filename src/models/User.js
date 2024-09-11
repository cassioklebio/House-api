import { Schema, model } from "mongoose";

const Userschema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
});

export default model("User", Userschema);