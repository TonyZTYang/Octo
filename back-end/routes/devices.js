let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {

    obj = {
        "devices": [
            {
                "name": "device 1",
                "link": "link 1"
            }, 
            {
                "name": "device 2",
                "link": "link 2"
            },
            {
                "name": "device 3",
                "link": "link 3"
            }
        ]
    };

    res.send(obj);
});

module.exports = router;