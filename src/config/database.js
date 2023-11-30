const mongoose = require("mongoose");
// zro76gliBkvF9yLM
exports.connectDB  = () =>{
   mongoose.connect(`mongodb+srv://avessolanki043:zro76gliBkvF9yLM@cluster0.xt1gznd.mongodb.net/studManagement`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(()=>{console.log("Successfully Connected ")}).catch((e)=>{console.log("Error While Connecting to Database ", e)});
};


// module.exports = connectDB;  