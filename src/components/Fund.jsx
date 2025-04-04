import React from 'react'
import UpiImg from '../assets/upi.png'
import IncompleteCircleIcon from '@mui/icons-material/IncompleteCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
const Fund = () => {
  return (
    <div className='mb-5'>
      <div className="row py-5">
        <div className="col py-2 d-flex align-items-center justify-content-end">
          <p className='mt-3  text-muted'>Instant, zero-cost fund transfers with </p>
          <img src={UpiImg} alt="" height={20} />
          <button className='btn bg-success mx-2 text-white px-4'> Add funds</button>
          <button className='btn bg-primary mx-2 text-white px-4'>Withdraw</button>
        </div>
      </div>
      <div className="row container ps-5 ">
        <div className="row mb-3   ">
          <div className="col-6 d-flex justify-content-between"><span><IncompleteCircleIcon /> Equity</span>
            <div className="col-6 fund-left-link">
              <a href=''><DataUsageIcon sx={{ fontSize: '15px', marginRight: '5px' }} />view statement</a>
              <a href=''><ErrorOutlineIcon sx={{ fontSize: '15px', marginRight: '5px' }} />Help</a>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-between"><span><WaterDropIcon /> Commodity</span>
            <div className="col-6 fund-left-link">
              <a href=''><DataUsageIcon sx={{ fontSize: '15px', marginRight: '5px' }} />view statement</a>
              <a href=''><ErrorOutlineIcon sx={{ fontSize: '15px', marginRight: '5px' }} />Help</a>
            </div>
          </div>
        </div>
        <div className="col-5 border me-5 pb-4 fund-equity">

          <div className="row fund-margin  py-3">
            <div className="col-6 fund-margin-left ">Available margin</div>
            <div className="col-6 fund-margin-right  text-primary">1,00,000.00</div>
          </div>
          <div className="row fund-margin py-3">
            <div className="col-6 fund-margin-left">Used margin</div>
            <div className="col-6 fund-margin-right text-primary">00</div>
          </div>
          <div className="row fund-margin py-3 border-bottom">
            <div className="col-6 fund-margin-left">Available cash</div>
            <div className="col-6 fund-margin-right text-primary">1,00,000.00</div>
          </div>

          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Opening balance</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Payin</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Payout</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">SPAN</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Deliver margin</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Exposure </div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin  border-bottom py-2 ">
            <div className="col-6 fund-margin-bottom-1">Options premium</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Collateral (Liquid funds)</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Collateral (Equity)</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Total collateral</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>


        </div>


        <div className="col-5 border ms-4 fund-equity">

          <div className="row fund-margin py-3">
            <div className="col-6 fund-margin-left">Available margin</div>
            <div className="col-6 fund-margin-right text-primary">5,00,000.00</div>
          </div>
          <div className="row fund-margin py-3">
            <div className="col-6 fund-margin-left">Used margin</div>
            <div className="col-6 fund-margin-right text-primary">00</div>
          </div>
          <div className="row fund-margin border-bottom py-3">
            <div className="col-6 fund-margin-left">Available cash</div>
            <div className="col-6 fund-margin-right text-primary">5,00,000.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Opening balance</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Payin</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Payout</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">SPAN</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Deliver margin</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin py-2 ">
            <div className="col-6 fund-margin-bottom-1">Exposure </div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>
          <div className="row fund-margin  border-bottom py-2 ">
            <div className="col-6 fund-margin-bottom-1">Options premium</div>
            <div className="col-6 fund-margin-bottom-2 ">0.00</div>
          </div>         
            
        </div>
      </div>
    </div>
  )
}

export default Fund
