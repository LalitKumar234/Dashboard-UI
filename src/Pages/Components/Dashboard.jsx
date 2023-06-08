import React, { useEffect } from 'react'
import TopNav from './DashboardComponents/TopNav'
import Info from './DashboardComponents/Info'
import LineChart from './DashboardComponents/LineChart'
import PieChart from './DashboardComponents/PieChart'
import Schedule from './DashboardComponents/Schedule'
import { HamBurgerIcon } from '../../Assets'
import { axiosGet } from '../../axiosService'
import Footer from './DashboardComponents/Footer'

const Dashboard = ({ setShowSideNav }) => {

    const getData = async () => {
        const response = await axiosGet('chartdata')
        console.log(response.data)

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='dashboard-container'>
            <div className='hamburgerMenu' onClick={() => setShowSideNav(true)}>
                <HamBurgerIcon />
            </div>
            <TopNav />
            <Info />
            <LineChart />
            <div className='bottom-items fx jus-between mt-40 gap-40'>
                <PieChart />
                <Schedule />
            </div>
            <Footer/>

        </div>
    )
}

export default Dashboard