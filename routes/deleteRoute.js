const express = require('express');
const router = express.Router();
const inv = require('../model/invent');
const del = require('../model/delete');

/*
Endpoints of delete route

1) GET '/'  - to retrieve deleted products
    Input : None
    Return : Deleted products and the comments

2) POST '/' - to delete a product
    Input : Product_id, comment
    Return : None

3) POST '/undo/:id' - to undelete the product
    Input : deleted_product_id
    Return : None

*/

router.get('/', (req, res, next) => {
    del.find()
        .populate("prodId")
        .then(p => res.json(p))
        .catch(error => console.log(error))
})


router.post('/', (req, res, next) => {
    Prod_id = req.body['id'];
    del_com = req.body['comment'];
    inv.findOneAndUpdate({ ItemId: Prod_id }, { "$set": { "deleted": true } },
        null,
        function(err, prod) {
            if (err) throw err;
            if (prod.length == 0) {
                res.json("No item found")
            } else {
                IdtobeDel = prod._id;
                del({
                    prodId: IdtobeDel,
                    delCom: del_com
                }).save((err, saved) => {
                    if (err) throw err;
                    res.status(200).send("Item deleted and comment added");
                })
            }
        }
    )

})


router.post('/undo/:id', async(req, res, next) => {
    del.find({ _id: req.params.id }, function(err, obj) {
        if (err) throw err;
        else {
            inv.findOneAndUpdate({ _id: obj[0].prodId }, { "$set": { "deleted": false } },
                null,
                async function(err, suc) {
                    if (err) throw err;
                    else {
                        await del.deleteOne({ _id: req.params.id });
                        res.json("Product undeleted!");
                    }
                })

        }
    })
})

module.exports = router;