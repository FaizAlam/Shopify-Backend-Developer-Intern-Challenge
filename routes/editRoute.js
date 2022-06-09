const express = require('express')
const router = express.Router();
const inv = require('../model/invent')


/*
Endpoints of edit route

1) POST '/' - to edit a product
    Input : Edited product details
    Return : None

*/


router.post('/', (req, res, next) => {
    cont = req.body;
    Iid = cont['id']
    Iname = cont['name']
    Iquant = cont['quant']
    Ibrand = cont['brand']
    Idesc = cont['desc']
    Iprice = cont['price']
    updated = Date.now()
    if (!Iname || !Iquant || !Ibrand || !Idesc || !Iprice || !Iid) {
        res.status(410).send('Input all fields');
    } else {
        inv.findOneAndUpdate({ ItemId: Iid }, { "$set": { "Name": Iname, "quant": Iquant, "brand": Ibrand, "desc": Idesc, "price": Iprice, "updated": Date.now() } },
            null,
            function(err, prods) {
                if (err) {
                    console.log(err)
                } else {
                    res.json(prods)
                }
            }

        )


    }

})

module.exports = router;