var express = require('express');
var router = express.Router();
const userLib=require('../backend/lib/userLib');

/* GET users listing. */
router.post('/login', function(req, res) {

    // DB

    //var responseJson = {success: true, message: 'Login Failed', user: null };
    userLib.isUserValid(req.body,function(resultJson){
    res.json(resultJson);
})
});

module.exports = router;
