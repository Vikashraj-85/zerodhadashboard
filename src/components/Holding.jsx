import React, { useState, useEffect } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Vargraph from './Vargraph.jsx'
import axios from 'axios'




const Holding = () => {

  const [allHoldings, setallHoldings] = useState([]);

  useEffect(() => {
     axios.get('https://zerodhadashboarbackend.onrender.com/allHoldings')
      .then(res => {        
        setallHoldings(res.data.data)
      }      )
      .catch(err => console.log(err))
  }, [])

  const labels=allHoldings.map((subArray)=>subArray['name']);
  const data={
    labels,
    datasets:[
      {
        label:'Stock Price',
        data:allHoldings.map((stock)=> stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  

  return (
    <div className='container-lg px-3 mb-5'>
      <div className="row pt-5 pb-4 border-bottom ">
        <div className="col-6">
          Holdings ({allHoldings.length})
          <select className='btn bg-white border mx-3 text-start px-3'>
            <option>All Stocks</option>
            <option>Kite Only</option>
            <option>Smallcase</option>
            <option>Mutualfunds</option>
          </select>
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
        <div className="col-3 holding-about my-4">
          <span>Total investment </span>
          <br />
          13,228.55
        </div>
        <div className="col-3 holding-about my-4">
          <span>Current Value </span>
          <br />
          15,758.71
        </div>
        <div className="col-3 holding-about my-4">
          <span>Day's P&L </span>
          <br />
          <p>35.70 <span>(+0.23%)</span></p>
        </div>
        <div className="col-3 holding-about my-4">
          <span>Total P&L</span>
          <br />
          <p>2,530.16 <span>(+19.13%)</span></p>
        </div>

      </div>
      <div className="row">
        <table>
          <thead>
            <tr >
              <td>Instrument</td>
              <td>Qty.</td>
              <td>avg.cost</td>
              <td>LTP</td>
              <td>Cur.val</td>
              <td>P&L</td>
              <td>Net chg</td>
              <td>Day chg</td>
            </tr>
          </thead>
          <tbody>

            {
              allHoldings.map((item, index) => {
                const currValue = item.price * item.avg;
                const isProfit = currValue - item.avg * item.qty > 0.0;
                const profitClass = isProfit ? 'text-success' : 'text-danger';
                const dayClass = item.isLoss ? 'text-danger' : 'text-success';

              
                return (

                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.qty} </td>
                    <td>{item.avg.toFixed(2)}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profitClass}>{(currValue - item.avg * item.qty).toFixed(2)}</td>
                    <td className={profitClass}>{item.net}</td>
                    <td className={dayClass}>{item.day}%</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="row my-5">
        <div className="col py-3">
          < Vargraph data={data}/>
        </div>
      </div>
    </div>
  )
}

export default Holding
