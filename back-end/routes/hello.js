let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {

    obj = {
        "projects": [
            {
                "id": 123,
                "name": "project 1",
                "points": 100,
                "eSize": 100
            }, 
            {
                "id": 456,
                "name": "project 2",
                "points": 200,
                "eSize": 99 
            },
            {
                "id": 789,
                "name": "project 3",
                "points": 1,
                "eSize": 0 
            }
        ]
    };

    res.send(obj);
});

module.exports = router;