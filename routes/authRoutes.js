const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
require("dotenv").config();

const router = express.Router();

//Sign in user
router.post("/register", async (req,res) => {
    const {name, email, password, role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = await User.create({name, email, password: hashedPassword, role});
        res.status(201).json({message: "User is created!"});
    }catch(err){
        res.status(400).json({message: "Error creating user!"});
    }
});

//Login user
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(400).json({message: "Invalid credentials!"});
    }

    const token = jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.json({token});
});


module.exports = router;