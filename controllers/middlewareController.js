const jwt = require("jsonwebtoken")
const middlewareController = {
    verifiToken: (req, res, next) => {
        const token = req.headers.token
        if (token) {
            const accesstoken = token.split(" ")[1]
            jwt.verify(accesstoken, "nguyen", (err, user) => {
                if (err) {
                    res.status(403).json("Token is invalid")
                }
                req.user = user
                next();
            })
        }
        else {
            res.status(401).json("You are not authenticated")
        }
    }
}
module.exports = middlewareController