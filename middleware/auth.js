const jwt = require('jsonwebtoken')
const User = require('../models/User')


exports.auth = async (req, res, next) => {
    try {
    const { createdAt, commentWriter, password } = req.query
    let visitor = commentWriter
    console.log(req.query)
    const comments = await Comment.find({createdAt, visitor, password})
    console.log(comments)
    if(comments.length === 0) {
        return res.status(400).json({
            success: false,
            error: "wrong info was provided"
        })
    }
        const token = req.cookies.HMTOKEN
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        
       if (!user) {
        res.status(200).redirect('../admin/login')
        }
        console.log('token passed')
        console.log(user)
        req.user = user
        next()
    } catch (e) {
        //res.status(401).send({ error: 'Please authenticate.' })
        res.json('login error')
    }
}