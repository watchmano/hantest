const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
{
    hashedId: {
        type: String,
        unique: true,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    coupons: {
        a: {
            type: Boolean,
            required: true,
            default: false
        },
        b: {
            type: Boolean,
            required: true,
            default: false
        },
        c: {
            type: Boolean,
            required: true,
            default: false
        },
        d: {
            type: Boolean,
            required: true,
            default: false
        },
        e: {
            type: Boolean,
            required: true,
            default: false
        },
        gift: {
            type: Boolean,
            required: true,
            default: false
        },
        counts: {
            type: Number,
            required: true,
            default: 0
        }
    },
    videoWatch: Number
    
}, {
    timestamps: true
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()
    
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    
    if (!user) {
        throw new Error('Unable to login')
    }
    console.log(password)
    console.log(user.password)
    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch)
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}


const User = mongoose.model('User', userSchema)
module.exports = User