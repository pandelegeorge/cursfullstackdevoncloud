const express = require('express')
const booksRouter = express.Router();

booksRouter.route('/books')
            .get(( req, res ) => {
                const response = {hello: 'Hello Books!'};
                res.json(response);
            })
module.exports = booksRouter;