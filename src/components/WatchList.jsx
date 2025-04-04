import React, { useState } from 'react'
import './Allstyle.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Tooltip, Grow } from '@mui/material';
import BuyActionWindow from './BuyActionWindow'
import SellActionWindow from './SellActionWondow'


const WatchList = ({ index, item }) => {

  const [stockmodel, setstockmodel] = useState(false)
  const [BuyModel, setBuyModel] = useState(false)
  const [SellModel, setSellModel] = useState(false)

  const handleOpenBuyModel = (e) => {
    setBuyModel(!BuyModel)
   
  }
  const handlestockModel = (e) => {
    setstockmodel(!stockmodel)
   
  }
  const handleOpenSellModel = (e) => {
    setSellModel(!SellModel)
   
  }

  



  return (
    <>
      <div className="row border-bottom pt-2 watchlist-stocks-div" onMouseEnter={handlestockModel} onMouseLeave={handlestockModel} key={index}>
        <div className={item.isDown ? 'text-danger col-4 ' : 'text-success col-4'}>
          {item.name}
        </div>
        <div className="col-8 d-flex justify-content-end ">
          <p>-371.83</p>
          <p>{item.percent}</p>
          <p className={item.isDown ? 'text-danger' : 'text-success'}>{item.isDown ? <KeyboardArrowDownIcon sx={{ fontSize: '18px' }} /> : <ExpandLessIcon sx={{ fontSize: '18px' }} />}</p>
          <p className={item.isDown ? 'text-danger' : 'text-success'}>61560.64</p>
        </div>
        {/*---------------------- model------------------- */}
        {stockmodel &&
          <Tooltip title="" placement='top' arrow key={index}>
            <div className="row stocks-model justify-content-end me-3 ">
              <div className="col-1  ch-1" onClick={handleOpenBuyModel}>B</div>
              <div className="col-1 ch-2" onClick={handleOpenSellModel}>S</div>
              <div className="col-1 ch-3"><FormatAlignCenterIcon sx={{ fontSize: '18px' }} /></div>
              <div className="col-1 ch-4"><ShowChartIcon sx={{ fontSize: '18px' }} /></div>
              <div className="col-1 ch-5"><DeleteIcon sx={{ fontSize: '18px' }} /></div>
              <div className="col-1 ch-6"><MoreHorizIcon sx={{ fontSize: '18px' }} /></div>
            </div>

          </Tooltip>}
      </div>

          {BuyModel &&
            <BuyActionWindow handleOpenBuyModel={handleOpenBuyModel} uid={item.name} />
          }
            {SellModel &&
            <SellActionWindow handleOpenSellModel={handleOpenSellModel} uid={item.name} />
          }
    </>
  )
}

export default WatchList;




