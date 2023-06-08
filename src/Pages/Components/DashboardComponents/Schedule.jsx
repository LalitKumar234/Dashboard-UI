import React from 'react'
import { DownArrow } from '../../../Assets'

const Schedule = () => {
    return (
        <div className='scheduleContainer'>
            <div className='fx jus-between'>
                <h2>Today’s schedule</h2>
                <span>See All <DownArrow /></span>
            </div>
            <ul className='schedules mt-40 fx fx-d-col gap-20'>
                <li className='schedule fx fx-d-col gap-5'>
                    <h3>Meeting with suppliers from Kuta Bali</h3>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali </p>
                </li>
                <li className='schedule fx fx-d-col gap-5'>
                    <h3>Meeting with suppliers from Kuta Bali</h3>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali </p>
                </li>
            </ul>
        </div>
    )
}

export default Schedule