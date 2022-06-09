const express = require('express')
const router = express.Router();
const inv = require('../model/invent')
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

/*
Endpoints of product route

1) GET '/'  - to retrieve all products in the inventory
    Input : None
    Return : products 

2) POST '/' - to insert a product in the inventory
    Input : product details
    Return : None


*/

router.get('/', async(req, res, next) => {
    //const products = await inv.find().select(['-deleted']);
    //res.json(products);

    const products = await inv.find({ deleted: "false" }).select(['-deleted']);
    res.json(products);

})

router.post('/', (req, res, next) => {
    cont = req.body;
    Iid = cont['id']
    Iname = cont['name']
    Iquant = cont['quant']
    Ibrand = cont['brand']
    Idesc = cont['desc']
    Iprice = cont['price']
    Iinit = cont['created']

    if (!Iname || !Iquant || !Ibrand || !Idesc || !Iprice) {
        res.status(410).send('Input all fields');
    } else {
        console.log()
        inv({
            ItemId: Iid,
            Name: Iname,
            quant: Iquant,
            desc: Idesc,
            price: Iprice,
            brand: Ibrand,
            updated: Date.now()
        }).save((err, saved) => {
            if (err) throw err;
            res.status(200).send("Data saved in the database");
        })
    }

})

module.exports = router;