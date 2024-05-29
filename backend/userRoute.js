const express=require("express");
const User = require("./userModal");

const router=express.Router();

const signUp=async (req,res)=>{
    try{
    const { name,email, password,mobile } = req.body;
    if (!name || !email || !password||!mobile) {
        res.status(400).json({error: 'Please enter all required fields'});
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({error: 'User already exists'});
    }
    else{
        const user = await User.create({
            name,
            email,
            password,
            mobile
        });
    
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile
            });
        } else {
            res.status(400).json({error:'Failed to create user'});
        }
    }
}
catch(err){
    res.json(400).json({message: err.message});
}
}

const login=async (req,res)=>{
    const { email,password } = req.body;

    if(!password||!email){
        res.status(400).json({error: 'Please enter all required fields'});
    }

    const user = await User.findOne({ email});

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
        });
    }
    else {
        res.status(401).json({error:'Invalid User'})
    }
}

router.route('/signup').post(signUp);
router.route('/login').post(login);

module.exports=router;