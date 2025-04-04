
import React, { useState,useEffect } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import axios from 'axios'


const Position = () => {

const[positions,setpositions]=useState([])

  useEffect(() => {
       axios.get('http://localhost:4000/allPositions')
        .then(res => {        
          setpositions(res.data.data)
        }      )
        .catch(err => console.log(err))
    }, [])

    
  return (

    <div className='container-lg px-3'>
      <div className="row pt-5 pb-4 border-bottom ">
        <div className="col-6">
        Positions ({positions.length})
        </div>
        <div className="col-6 d-flex align-items-center text-end ">
          <input type="text" placeholder=' Search' className='me-3 holding-serach-input' />
          <div className='holding-links '>
            <a href=""> <GroupsIcon sx={{ fontSize: '15px' }} /> Family</a>
            <a href=""> <DataSaverOffIcon sx={{ fontSize: '15px' }} /> Analytics</a>
            <a href=""> <SystemUpdateAltIcon sx={{ fontSize: '15px' }} /> Download</a>
          </div>
        </div>
      </div>

      <div className="row">
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Instrument</td>
              <td>Qty.</td>
              <td>avg.</td>
              <td>LTP</td>
              <td>P&L</td>
              <td>Chg.</td>
            </tr>
          </thead>
          <tbody>
            {
              positions.map((item, index) => {
                const currValue=item.price * item.avg;
                const isProfit= currValue - item.avg*item.qty >=0.0;
                const profitClass = isProfit ? 'text-success':'text-danger';
                const dayClass = item.isLoss ? 'text-danger': 'text-success';

                return (
                  <tr key={index}>
                    <td><div className={item.product === 'CNC' ? 'position-product-cnc fs-6 text-center' : 'position-product-nrml fs-6 text-center'}>{item.product}</div></td>
                    <td>{item.name}</td>
                    <td className={item.isLoss ? 'text-success' : 'text-danger'}>{item.qty}</td>
                    <td>{item.avg}</td>
                    <td>{item.price}</td>
                    <td className={profitClass}>{(currValue-item.avg*item.qty).toFixed(2)}</td>
                    <td className={dayClass}>{item.day}</td>

                  </tr>
                )
              })
            }

          </tbody>

        </table>

      </div>
    </div>


  )
}

export default Position
