var express = require('express');

const bookRouter = express.Router();


function router(info) {
    bookRouter.route('/').get((req, res) => {
        res.render('group', { title: "MyApp", list: ['a', 'b'] });
    });

    bookRouter.route('/:id').get((req, res) => {
        const { id } = req.params;
        res.render('single', { title: "MyApp", list: ['a', 'b'] });
    });

    return bookRouter;
}


module.exports = router;