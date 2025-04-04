const mongoose=require('mongoose');

async function main() {
    mongoose.connect(process.env.MONGO_URL)
    
}

main().then(res=>console.log('database in connected.')).catch(err=>console.log(err))