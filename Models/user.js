const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            
        },
        password:String,
    
        phone:{
            type:String,
        },
        holdings:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'holding',
            }
        ],
        orders:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'order',  
            }
        ],
        funds:
               {
                available_balance:Number,
                margin_balance:Number,
                withdrawable_balance:Number,
               }
        
    },{timestamps:true}
)
    


module.exports = mongoose.model('user', userSchema);