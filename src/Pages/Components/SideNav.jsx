import React, { useEffect } from 'react'
import './Components.css'
import { CrossIcon, DashBoard, Schedules, Settings, TotalRevenues, Transactions, Users } from '../../Assets'


const SideNav = ({showSideNav, setShowSideNav}) => {
    return (
        <div className='SideNavContainer'
        style={{
            display: showSideNav && 'block'
        }}
        >
            <h3>Board.</h3>
            <div className='fx fx-d-col jus-between sideNavInner'>
                <div className='cross-icon fx-cnt'
                onClick={()=>setShowSideNav(false)}
                >
                    <CrossIcon/>
                </div>
                <ul className="dashboard-links fx fx-d-col gap-40">
                    <li className='fx al-cnt gap-20 active'><DashBoard />Dashboard</li>
                    <li className='fx al-cnt gap-20'><Transactions color="white" />Transactions</li>
                    <li className='fx al-cnt gap-20'><Schedules />Schedules</li>
                    <li className='fx al-cnt gap-20'><Users />Users</li>
                    <li className='fx al-cnt gap-20'><Settings />Settings</li>
                </ul>
                <ul className='sideNav-footer fx fx-d-col gap-40'>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav