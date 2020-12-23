const mongoose = require('mongoose')

const BoothSchema = new mongoose.Schema({
    boothName: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    thunbnails: {
        type: [Buffer]
    },
    pdfs: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Booth', BoothSchema)