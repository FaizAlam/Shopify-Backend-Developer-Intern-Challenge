const mongoose = require('mongoose');

/*
ITEM DETAILS
-> ItemID : ItemId
-> Name : Name
-> Quantity : quant
-> Brand : brand
-> Description : desc
-> Price : price
-> Date Created : created
-> updated : updated

*/

const invSchema = new mongoose.Schema({
    ItemId: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    Name: {
        type: String,
    },
    quant: {
        type: Number,

    },
    brand: {
        type: String,
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    created: {
        type: Date,
        default: () => Date.now(),
    },
    updated: {
        type: Date,
        default: null,
    }



})


module.exports = mongoose.model('inv', invSchema);