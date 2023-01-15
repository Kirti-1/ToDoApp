const storedTask = require('./../Models/storedTask')
module.exports.actionAdd = function(req, res){
    console.log('yo guyss')
    // res.send('<h1>helllooooo guysss!!!!</h1>')
    console.log('add = ' , req.body);
        const user = new storedTask(req.body);
        console.log(user);
      
        try {
           user.save();

        //   res.send(user);
        } catch (error) {
        //   res.status(500).send(error);
        }

    return res.redirect('back');
}

module.exports.actionDelete = function(req, res){
    console.log('yo guyss')
    // res.send('<h1>helllooooo guysss!!!!</h1>')

    // storedTask.deleteOne({ "'_id'" : `ObjectId('${req.params.id}')`})
    var id = req.params.id;
    storedTask.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });

    return res.redirect('back');
}