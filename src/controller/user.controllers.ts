const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const generateJWT = require('../config/generatetToken');








const registerUser = asyncHandler(async (req: any, res: any) => {

    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Veuillez entrer un champ !");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("email existe deja !");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateJWT(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Utilisateur non cree")
    }

});

const authUser = asyncHandler(async (req: any, res: any) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (password === user.password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateJWT(user._id)
        })
    } else {
        res.status(400);
        throw new Error("email and password invalid")
    }

})



module.exports = {
    registerUser,
    authUser
}