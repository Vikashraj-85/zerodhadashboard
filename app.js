require('dotenv').config()
const express = require('express')
const app = express()
const cors=require('cors')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')



app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

const positionRoute=require('./Routes/position')
const holdingRoute=require('./Routes/holding')
const orderRoute=require('./Routes/order')
const userRoute=require('./Routes/user')


const port = 4000;
require('./database/index')

app.use('/allPositions',positionRoute)
app.use('/allHoldings',holdingRoute)
app.use('/order',orderRoute)
app.use('/user',userRoute)


 
app.listen(port, () => {
    console.log(`server is runnig at port ${port}`)
})