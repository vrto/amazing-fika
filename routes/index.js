
/*
 * GET home page.
 */

getPeople = function () {
    return [{ name: 'Tomas', vacation: true }, { name: 'Michal', vacation: false }];
}

log = function () { console.log("l'cocl"); }

exports.index = function (req, res) {
    res.render('index', {
        title: 'Amazing Fika', 
        people: getPeople(), 
        fs: {
            serverGetPairs: log,
            clientGetPairs: log
        }
    });
}
