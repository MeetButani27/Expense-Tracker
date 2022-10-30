const express = require('express');
const router = express.Router();
const signUpTemplate = require('./userDetails');

// router.get('/', (req,res) => {
//     res.json('Sample text');
// });


router.post("/", (req,res)=>{
    const signedUpUser = new signUpTemplate(req.body);
    signedUpUser.save((err) => {
        if(err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200),json({ success: true });
    });
});


// router.post('signup', (req,res) => {
//     const signedUpUser = new signUpTemplate({
//         username: req.body.username,
//         password: req.body.password
//     })

//     signedUpUser.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json(err);
//     })
// })

module.exports = router