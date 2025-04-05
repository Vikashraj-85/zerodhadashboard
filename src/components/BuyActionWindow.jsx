import React, { useState } from 'react'

import axios from 'axios'

const BuyActionWindow = ({uid ,handleOpenBuyModel}) => {

    const[stockQuantity,setstockQuantity]=useState(1)
    const[stockPrice,setstockPrice]=useState(0.0);

    const handleBuyClick=()=>{
            axios.post('https://zerodhadashboarbackend.onrender.com/order/newOrder',{
                name:uid, 
                qty:stockQuantity,
                price:stockPrice,
                mode:'BUY'
            })
        
          
            handleOpenBuyModel();
    }

    const handleCancelClick=()=>{
        handleOpenBuyModel()
   
    };

    return (
        <div className='container border-dark py-2 px-1 buy-window-popup border'>
            <h4>Buy</h4>
            <div className="row mt-4 mb-4">
                <div className="col-6">
                    <input type="number" className=' bg-white text-black buy-window-input border' min={0} placeholder='Qty' onChange={(e)=>setstockQuantity(e.target.value)} value={stockQuantity} />
                </div>
                <div className="col-6">
                    <input type="text" className=' bg-white text-black buy-window-input border' min={0} placeholder='Price' onChange={(e)=>setstockPrice(e.target.value)} value={stockPrice} />
                </div>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-5 buy-text  text-start ms-3">
                    margin available
                </div>

                <div className="col-6  py-3 d-flex justify-content-between">
                    <button className='btn-1 ' onClick={handleBuyClick} >Buy</button>
                    <button className='btn-2 me-2' onClick={handleCancelClick}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default BuyActionWindow;
