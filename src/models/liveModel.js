import mongoose, { Schema, model } from "mongoose";


const liveSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'name  is required'],
        minlength: [2, 'name must be min 2 chars'],
        maxlength: [50, 'cannot exceed 50 chars']
    },
    uid: {
        type: String,
        unique: true,
        required: [true, 'uid is required']
    },
    industry: {
        type: String
    },
    address: {
        type: String //remove this later and use below
        // street: { type: String },
        // city: { type: String },
        // state: { type: String },
        // country: { type: String }
    },
    logo: String,
    url: String

});

const Live = model('Live', liveSchema);

export default Live;