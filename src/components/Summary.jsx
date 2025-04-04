import React from 'react'
import IncompleteCircleIcon from '@mui/icons-material/IncompleteCircle';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import rewardimg from '../assets/rewardimg.jpeg'
import { holdings } from './data/data'

const Summary = () => {
  return (
    <div className="container-lg ">
      <div className="row  pt-5">
        <div className="col fs-3  mb-3 text-center text-md-start">
          Hi, Demo User
        </div>
      </div>
      <div className="row border-top py-5 text-center text-md-start ">
        <div className="col-md-3   summary-left-equity border-end ">
          <h5><IncompleteCircleIcon /> Equity</h5>
          <p>1L
            <span>Margin Availabe</span>
          </p>
        </div>
        <div className="col-md-3 clo-5 border-end summary-left-equity-col-2 pt-5 text-center text-md-start">
          <p>Margins used 0</p>
          <p>Opening balance 1L</p>
          <p>View statement</p>
        </div>
        <div className="col-md-3 summary-left-equity border-end text-center text-md-start">
          <h5><WaterDropIcon /> Commodity</h5>
          <p>50k
            <span>Margin Availabe</span>
          </p>
        </div>
        <div className="col-md-3 border-end summary-left-equity-col-2 pt-5 text-center text-md-start">
          <p>Margins used 0</p>
          <p>Opening balance 50k</p>
          <p>View statement</p>
        </div>
      </div>
      <div className="row py-5 border-top text-center text-md-start">
        <div className="col-md-4  summary-holdings border-end ">
          <h5><WorkOutlineIcon/> Holdings({holdings.length})</h5>
          <p>2.24k <span>+16.90%</span></p>
        </div>
        <div className="col-md-5  summary-left-equity-col-2 pt-5">
          <p>Current value  {'15.46k'}</p>
          <p>Investment   {'13.23k'}</p>          
        </div>
        <div className="col-md-3 bg-body-secondary reward-img py-3">
          <h5 className='fs-4'>Invite your friend and earn Rewards</h5>
          <img src={rewardimg} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Summary
