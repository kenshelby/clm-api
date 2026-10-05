import mongoose from "mongoose";


const webExtractorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: String,
    type: String,
    url: String,
    logo: String,
    status: String

});

const WebExtractor = mongoose.model('WebExtractor', webExtractorSchema);

export default WebExtractor;