function bookController() {
    function getIndex(req, res) {
        res.render('group', { title: "MyApp", list: ['a', 'b'] });
    }

    return {
        getIndex
    }
}


module.exports = bookController;