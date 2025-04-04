import React from 'react'
import './Allstyle.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Order = () => {
  return (
    <div >
      <div className="row pt-5 pb-3">
        <div className="col orders-title">
          Open Orders(6)
        </div>
      </div>

      <div className="row">
        <div className="col">

          <table>

            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Instrument</th>
                <th>Product</th>
                <th>Qty.</th>
                <th>LTP</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13:39:12</td>
                <td><span className="sell">SELL</span></td>
                <td>PNB NSE</td>
                <td>CO</td>
                <td>0 / 1</td>
                <td>49.30</td>
                <td>0.00 / 48.50 trg.</td>
                <td><span className="status">OPEN</span></td>
              </tr>
              <tr>
                <td>13:39:12</td>
                <td><span className="buy">BUY</span></td>
                <td>INFY NSE</td>
                <td>CO</td>
                <td>0 / 1</td>
                <td>49.30</td>
                <td>49.50 / 48.50 trg.</td>
                <td><span className="status">OPEN</span></td>
              </tr>
              <tr>
                <td>13:35:15</td>
                <td><span className="buy">BUY</span></td>
                <td>USDINR 23MAY FUT CDS</td>
                <td>NRML</td>
                <td>0 / 3</td>
                <td>82.4225</td>
                <td>81.0000</td>
                <td><span className="status">OPEN</span></td>
              </tr>
              <tr>
                <td>13:34:15</td>
                <td><span className="buy">BUY</span></td>
                <td>USDINR 23MAY FUT CDS</td>
                <td>MIS</td>
                <td>0 / 1</td>
                <td>82.4225</td>
                <td>81.0000</td>
                <td><span className="status">OPEN</span></td>
              </tr>
              <tr>
                <td>13:32:12</td>
                <td><span className="buy">BUY</span></td>
                <td>SBIN BSE</td>
                <td>MIS</td>
                <td>0 / 1</td>
                <td>586.50</td>
                <td>585.00 / 585.00 trg.</td>
                <td><span className="status">OPEN</span></td>
              </tr>
              <tr>
                <td>13:29:52</td>
                <td><span className="buy">BUY</span></td>
                <td>VEDL NSE</td>
                <td>CNC</td>
                <td>0 / 1</td>
                <td>279.45</td>
                <td>0.00 / 290.00 trg.</td>
                <td><span className="status">OPEN</span></td>
              </tr>
            </tbody>
           
          </table>
        </div>
      </div>

      <div className="row pt-5 pb-3">
        <div className="col orders-title">
          Executed orders (5)
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Instrument</th>
              <th>Product</th>
              <th>Qty.</th>
              <th>Avg. Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>13:45:09</td>
              <td><span className="buy">BUY</span></td>
              <td>11th W 23MAY 18300 CE NFO</td>
              <td>MIS</td>
              <td>0 / 50</td>
              <td>0.00</td>
              <td><span className="status-rejected">REJECTED</span></td>
            </tr>
            <tr>
              <td>13:44:50</td>
              <td><span className="buy">BUY</span></td>
              <td>11th W 23MAY 18300 CE NFO</td>
              <td>NRML</td>
              <td>0 / 50</td>
              <td>0.00</td>
              <td><span className="status-rejected">REJECTED</span></td>
            </tr>
            <tr>
              <td>13:39:08</td>
              <td><span className="sell">SELL</span></td>
              <td>PNB NSE</td>
              <td>CNC</td>
              <td>0 / 1</td>
              <td>51.20</td>
              <td><span className="status-cancelled">CANCELLED</span></td>
            </tr>
            <tr>
              <td>13:37:34</td>
              <td><span className="buy">BUY</span></td>
              <td>INFY NSE</td>
              <td>CNC</td>
              <td>1 / 1</td>
              <td>50.75</td>
              <td><span className="status-complete">COMPLETE</span></td>
            </tr>
            <tr>
              <td>13:28:52</td>
              <td><span className="buy">BUY</span></td>
              <td>VEDL NSE</td>
              <td>MIS</td>
              <td>1 / 1</td>
              <td>283.40</td>
              <td><span className="status-complete">COMPLETE</span></td>
            </tr>
          </table>
        </div>

      </div>

      <div className="row pt-5 pb-3">
        <div className="col orders-title">
          Traders <KeyboardArrowDownIcon />
        </div>
      </div>


    </div>
  )
}

export default Order
