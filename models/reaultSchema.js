import mongoose from "mongoose";

const { Schema } = mongoose

const resultModel = new Schema({
    username: {
        type: String
    },
    results: {
        type: Array,
        default: []
    }, attempts: {
        type: Number,
        default: 0
    }, points: {
        type: Number,
        default: 0
    }, passfail: {
        type: String,
        default: ''
    }
})

export default mongoose.model('result',resultModel)