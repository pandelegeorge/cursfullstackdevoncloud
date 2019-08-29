const express = require('express')
const itemRouter = express.Router();
const sql = require('./db.js')
var allitems = []

itemRouter.route('/item')
           .get(( req, res ) => {
            
            sql.query("SELECT * FROM item",  (err, rows) => {
                if (err) throw err;
                rows.forEach( ( row ) => {
                    allitems.push({item_name:`${row.item_name}`, item_category:`${row.item_category}`, item_price:`${row.item_price}`})
                })
            })
            
            res.json(allitems);
            allitems = []
           })
           .post(( req, res ) => {
                sql.query(`insert into item (id, item_name, item_category, item_price) 
                        values ("${req.body.id}", "${req.body.item_name}", "${req.body.item_category}", 
                                "${req.body.item_price}")`, (err, res) => {
                                    if(err) throw err;
                                    console.log(`this id ${req.body.id} was inserted sucessfully`)
                                })
                res.json(req.body);
            })
            .put(( req, res ) => {
                sql.query(`update item set item_name = ?, item_category = ?, item_price= ? 
                           where id = ?`, [`${req.body.item_name}`,`${req.body.item_category}`, 
                                           `${req.body.item_price}`,`${req.body.id}`], (err, res) => {
                                                if(err) throw err;
                                                console.log(`this id ${req.body.id} was updated sucessfully`)
                                           })
                res.json(req.body);
                
            })
            .delete((req, res) => {
                sql.query(`delete from item where id = ?`, [`${req.body.id}`], (err, res) => {
                                                if(err) throw err;
                                                console.log(`this id ${req.body.id} was deleted sucessfully`)
                                           })
            });

module.exports = itemRouter;