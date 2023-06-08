import React from 'react'
import { Likes, TotalRevenues, TotalUsers, Transactions } from '../../../Assets'

const Info = () => {
    return (
        <div className='cards fx jus-between'>
            <div className="card">
                <div className='fx jus-end'>
                    <TotalRevenues />
                </div>
                <div className='card-content'>
                    <h4>Total Revenues</h4>
                    <h2>$2,129,430</h2>
                </div>
            </div>
            <div className="card">
                <div className='fx jus-end'>
                    <Transactions color="black" />
                </div>
                <div className='card-content'>
                    <h4>Total Transactions</h4>
                    <h2>1,520</h2>
                </div>
            </div>
            <div className="card">
                <div className='fx jus-end'>
                    <Likes />
                </div>
                <div className='card-content'>
                    <h4>Total Likes</h4>
                    <h2>9,721</h2>
                </div>
            </div>
            <div className="card">
                <div className='fx jus-end'>
                    <TotalUsers />
                </div>
                <div className='card-content'>
                    <h4>Total Users</h4>
                    <h2>892</h2>
                </div>
            </div>
        </div>
    )
}

export default Info