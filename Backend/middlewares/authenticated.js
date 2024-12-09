const jwt = require('jsonwebtoken')

const ensureAutehnticated = (req, res, next)=>{
    const auth = req.headers['authorization'];
    if (!auth) {
        return  res.status(403).json({message:"UnAuthorized, JWT token is requires"})
    }

    try {
        
const decoded = jwt.verify(auth, "secretKey");
req.user = decoded;
next();
    } catch (error) {
        return  res.status(403).json({message:"UnAuthorized, JWT token is wrong or expired"})

    }
}

module.exports = ensureAutehnticated;