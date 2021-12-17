var express = require('express');
var router = express.Router();
const fs = require('fs');
router.get('/', function(req, res) {
    let user = {  // Expects a username and password in json file
    
        'name': req.params.name,
        'password': req.params.password
        
    };
     
    let content = JSON.parse(fs.readFileSync('../users/user.json', 'utf8')); // opens the local json file
    // edit or add property
    if (user.name in content){
        res.post('302');
    }
    else{
        content[user.name] = user
        //write file
        fs.writeFileSync('../users/user.json', JSON.stringify(content));
        res.post(200)
    }
     //next
});


module.exports = router;
