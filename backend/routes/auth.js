const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Logfeatch= require('../Middleware/logfeatch');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const JWT_SECRET = "djvnndfnsdmn nsdbmnas";


router.post('/create',
    [
        check('name', 'name length should be  greater then 3 characters')
            .isLength({ min: 3 }),
        check('email', 'Email length should be 10 to 30 characters')
            .isEmail().isLength({ min: 10, max: 30 }),


        check('password', 'Password length should be 8 to 10 characters')
            .isLength({ min: 8 }),
    ],
    async (req, res) => {



        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exists" })
            }




            const salt = await bcrypt.genSalt(10);
            secpass = await bcrypt.hashSync(req.body.password, salt);

            console.log(secpass)

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                Password: secpass,
            })


            const data = {
                user: {
                    id: user.id

                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            res.status(200)
            res.json(authtoken);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Some internal server Error")
        }
    })

// login user


router.post('/login',
    [


        check('email', 'Email d Cannot be blank')
            .isEmail().notEmpty(),


        check('password', 'Password Cannot be blank')
            .notEmpty(),
    ],
    async (req, res) => {



        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ error: "Sorry a user with this email not exists" });
            }

            const passcompare = await bcrypt.compare(password, user.Password);

            if (!passcompare) {
                return res.status(400).json({ error: "Sorry a user with this email not exists" });
            }
            const data = {
                user: {
                    id: user.id

                }
            }


            const authtoken = jwt.sign(data, JWT_SECRET)
            res.json(authtoken);


        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some internal server Error")
        }

    })

// user details 
router.get('/user',Logfeatch, async (req, res) => {



       

        try {

            userid =req.user.id;
            user =await User.findById(userid).select("-password");
            res.send(user)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some internal server Error")
        }
    })



    router.put('/userupdate/:id',Logfeatch, [


        check('name', 'Name Cannot be blank')    .notEmpty(),   ], async (req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
const {name}=req.body;
console.log(name);
const updatedata={};
if(name){updatedata.name=name};
let user=await User.findById(req.params.id);
if(!user){ return res.status(404).send("user Note found")}

// if((user.user.toString() !== res.user.id)){
//     return res.status(401).send("Not Allowd")
// }
   
console.log(updatedata);
user= await User.findByIdAndUpdate(req.params.id , {$set:updatedata}, {new:true});
res.json({user});
       
    })
module.exports = router;