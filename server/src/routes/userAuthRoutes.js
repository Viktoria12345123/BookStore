const express = require("express");
const { registerUser, generateToken, logUser, verifyToken } = require("../services/authService");
const { getUserById, getUser } = require("../services/userService");
const { default: mongoose } = require("mongoose");




const router = express.Router();


router.post("/register", async (req, res) => {

        const data = req.body;
        const user = await registerUser(data);
        const token = generateToken(user);

        res.cookie('accessToken', token, {
            maxAge: 259200000,
            httpOnly: true,
            path: '/'
        });


        res.status(200).json({
            _id: user._id.toString(),
            email: user.email,
        });


    
});

router.post("/login", async (req, res) => {

    const userData = req.body;

    const user = await logUser(userData);
    const token = generateToken(user);

    res.cookie('accessToken', token, {
        maxAge: 259200000,
        httpOnly: true,
        path: '/'
    });

    res.status(200).json({
        _id: user._id,
        email: user.email,
    });


})

router.post("/logout", async (req, res) => {

    res.clearCookie('accessToken', { path: '/' });
    res.status(200).send('Logged out successfully');
})

router.get('/session', async (req, res) => {

    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = getUser(token, res);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
})

router.get('/:userId', async (req, res) => {
    console.log('inFind');
    const userId = req.params.userId;

    if (userId) {
        const user = await getUserById(userId);

        res.status(200).json(user);
    }






})





module.exports = router;