const mongoose = require('mongoose')
mongoose.connect(
    "mongodb://localhost:27017/TodoTaskList",
    {useNewUrlParser: true}
    );

    console.log('mongoose connected')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully!!!");
});


const UserSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  category: {
    type:String,
    required: true
  }
});

const User = mongoose.model("Tasks", UserSchema);

module.exports = User;