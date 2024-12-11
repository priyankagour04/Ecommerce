const express = require("express");
const ensureAutehnticated = require("../middlewares/authenticated");
const UserModel = require("../models/users");
const router = express.Router();

router.get('/', ensureAutehnticated, (req, res)=>{

    console.log("logged in user---" , req.user)

    res.status(200).json([
        {
         name : "Table",
         price :"500"
        },

        {
            name: "Table lamp",
            price : "250"
        }
    ])
})

module.exports = router;