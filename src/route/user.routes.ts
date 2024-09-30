import express from "express";


const useController = require('../controller/user.controllers')
const router = express.Router();

router.post('/register', useController.registerUser);
router.post('/login', useController.authUser);


module.exports = router;