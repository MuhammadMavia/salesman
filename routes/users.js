var express = require('express');
var router = express.Router();
var schema = require("./schema");
var usersModel = schema.usersModel;

router.get('/:uid', function (req, res) {
    usersModel.findOne({firebaseToken: req.params.uid}, function (err, success) {
        res.send(success || err);
    });
});

router.get('/users/:adminId', function (req, res) {
    usersModel.find({roll: 0, adminId: req.params.adminId}, function (err, success) {
        res.send(success || err);
    });
});
module.exports = router;
