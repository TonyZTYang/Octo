let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {

    obj = {
        "projects": [
            {
                "id": 123,
                "name": "project 1",
                "points": 100,
                "eSize": 100,
                "progress": 10,
                "deadline": "123",
                "team": [
                    "a", "b"
                ]
            }, 
            {
                "id": 456,
                "name": "project 2",
                "points": 200,
                "eSize": 99 ,
                "progress": 50,
                "deadline": "567",
                "team": [
                    "b", "c"
                ]
            },
            {
                "id": 789,
                "name": "project 3",
                "points": 1,
                "eSize": 0 ,
                "progress": 100,
                "deadline": "056",
                "team": [
                    "d", "e"
                ]
            }
        ]
    };

    res.send(obj);
});

module.exports = router;