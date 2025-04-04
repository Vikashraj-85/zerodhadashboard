import React, { useState } from 'react'
import './Allstyle.css'
import kiteLogo from '../assets/kite-logo.svg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const Navabr = () => {
    const [profileModel, setprofileModel] = useState(false);

    const handleProfileModel = () => {
        setprofileModel(!profileModel)
    }
    return (<>
        <div className='container-fluid position-fixed top-0 left-0 bg-white navbar-bg'>
            <div className="row nav ">
                <div className="col-4 d-none d-lg-flex border bg-white">
                    <div className="row  d-flex  align-items-center navbar-container">
                        <div className="col-6 navbar-left  ">
                            <h6>NIFTY 50 <span> 18181.75<span> -104.75 (-0.57%)</span></span></h6>
                        </div>
                        <div className="col-6 navbar-left  ">
                            <h6>SENSEX <span>61560.64 <span> -371.83 (-0.60%)</span></span></h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 navbar   border">
                    <div  className="container-lg">
                        <a  className="navbar-brand" href="#">
                            <img src={kiteLogo} alt="Bootstrap" width="30" height="24" />
                            </a>
                         
                        <div className='d-flex navbar-right '>
                            <ul  className="nav justify-content-end d-none d-md-flex  ">
                                <li  className="nav-item"><Link className="nav-link" style={{ textDecoration: 'none' }} to={'/'}>
                                    Dashboard </Link>
                                </li>
                                <li  className="nav-item"><Link className="nav-link" style={{ textDecoration: 'none' }} to={'/dashboard/orders'}>
                                     Orders </Link>
                                </li>
                                <li  className="nav-item"><Link className="nav-link" style={{ textDecoration: 'none' }} to={'/dashboard/holdings'}>
                                     Holdings </Link>
                                </li>
                                <li  className="nav-item"><Link className="nav-link" style={{ textDecoration: 'none' }} to={'/dashboard/positions'}>
                                     Positions </Link>
                                </li>
                                <li  className="nav-item me-2">
                                    <Link className="nav-link" style={{ textDecoration: 'none' }} to={'/dashboard/funds'}>
                                         Funds </Link>
                                </li>
                            </ul>
                            <div  className="nav-item d-flex align-items-center " id='navbar-user-profile-div'>
                                <NotificationsIcon sx={{ fontSize: '20px', marginRight: '5px', cursor: 'pointer', color: '#000' }} />
                                <a  className="nav-link " onClick={handleProfileModel} >
                                    <img src={kiteLogo} alt="not" className='me-2 navbar-user-profile-img' />
                                    {'DemoUser'}
                                    </a>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        {/* profile Model */}
        {
            profileModel && <div className="profile-model border  ">
                <h3>Demouser</h3>
                <p>My Profile</p>
                <p>Console</p>
                <p>Coin</p>
                <p>Support</p>
                <p>User manual</p>
                <p>Logout</p>
            </div>
        }
    </>
    )
}

export default Navabr
