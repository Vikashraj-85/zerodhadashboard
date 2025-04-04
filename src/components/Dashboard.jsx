import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Summary from './Summary';
import Orders from './Order'
import Holding from './Holding'
import Position from './Position'
import Fund from './Fund'
import WatchList from './WatchList'
import SearchIcon from '@mui/icons-material/Search';
import { watchlist } from './data/data'
import DoughnutChart from './DoughnutChart';






const Dashboard = () => {

    const labels = watchlist.map((subArray) => subArray['name']);
    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: watchlist.map((stock) => stock.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ]
    }


    return (
        <div className="container-fluid dashboard position-fixed top-0 left-0">
            <div className="row ">
                <div className="col-lg-4 border d-none d-lg-flex  flex-column watchlist-content ">
                    {/* ============================watchlist ==========================*/}
                    <div className="row watchlist-search py-2 border-bottom ">
                        <div className="col   d-flex">
                            <SearchIcon sx={{ margin: '2px 5px 0 0' }} />
                            <div className="watchlist-search-box ">
                                <input type="text" placeholder='Search (infy bse,nifty fut, etc) ' />
                            </div>
                            {`${watchlist.length}/50`}
                        </div>
                    </div>
                 
                        {
                            watchlist.map((item, index) => {
                                
                                return (
                                    <WatchList key={index} item={item} />
                                )
                            })
                        }
                    

                    <div className='my-5'>
                        <DoughnutChart data={data} />
                    </div>

                </div>

                {/*================================================================  */}
                <div className="col-lg-8  border dashborad-content">
                    <Routes>
                        <Route exact path='/' element={<Summary />} />
                        <Route path='/dashboard/orders' element={<Orders />} />
                        <Route path='/dashboard/holdings' element={<Holding />} />
                        <Route path='/dashboard/positions' element={<Position />} />
                        <Route path='/dashboard/funds' element={<Fund />} />
                        </Routes>
                </div>
            </div>


        </div>
    )
}

export default Dashboard
