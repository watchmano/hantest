const User = require('../models/User')

exports.enterExhibition = async (req, res, next) => {
    try {
        res.send('Hello')
        const { hashedId } = req.query
        const user = await User.find({hashedId})
        
        //Guest Login, Not being traced
        if (!user) {
            res.redirect('/')
            return
        }

        req.user = user
        res.redirect('/')
    } catch (e) {
        res.json('login error')
    }
}