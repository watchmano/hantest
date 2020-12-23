const mongoose = require('mongoose')

const TopicSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: 'not categorized'
    },
    host: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Topic', TopicSchema)