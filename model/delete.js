const mongoose = require('mongoose');
const inv = require('./invent');
/*
PRODUCT DETAILS
-> ItemID : ItemId
-> Name : Name
-> Quantity : quant
-> Brand : brand
-> Description : desc
-> Price : price
-> Date Created : created
-> updated : updated

*/


const delSchema = new mongoose.Schema({
    prodId: {
        type: String,
        ref: inv,
    },
    delCom: {
        type: String,
    }

})


module.exports = mongoose.model('del', delSchema);