const storedTask = require('./../Models/storedTask')
module.exports.home = function(req, res){
    console.log('helllo')
    storedTask.find({},function(err, data){
        if(!err){
            console.log(data);
            return res.render('main',{
                'title':'TODOAPPP',
                'tasks':data
            });

        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    })
    
}
