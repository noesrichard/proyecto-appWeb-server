const mongoose = require('mongoose'); 

const UserModel = mongoose.Schema({ 
    username: { 
        type: String, 
        require: true 
    }, 
    password: { 
        type: String, 
        require: true
    }
})


module.exports = mongoose.model('user', UserModel); 


