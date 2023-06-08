import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js'
import { DownArrow } from '../../../Assets'
import { axiosGet } from '../../../axiosService'


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
)
const LineChart = () => {
    const [dropDown, setDropDown] = useState(false);
    const [chartData, setChartData] = useState({
        user:[],
        guest:[]
    });
    const months = ["Jan - Feb", "Feb - March", "March - April", "April - May", "May - June", "June - July"]
    const [params, setParams] = useState(months[0]);
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Guest',
                data: chartData.guest,
                backgroundColor: 'transparent',
                borderColor: '#E9A0A0',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.3,
            },
            {
                label: 'User',
                data: chartData.user,
                backgroundColor: 'transparent',
                borderColor: '#9BDD7C',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.3,
            },
        ]
    };
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: 'Montserrat',
                        size: 14,

                    },
                },
            },
            y: {
                min: 0,
                max: 500,
                grid: {
                    drawBorder: false,
                    borderWidth: 0,
                },
                ticks: {
                    stepSize: 100,
                    font: {
                        family: 'Montserrat',
                        size: 14,

                    },
                },
            },
        }
    };

    const getData = async () => {
        const response = await axiosGet(`chartdata/${params}`)
        console.log(response.data[0])
        setChartData({
            user: response.data[0].weeklyUser,
            guest: response.data[0].weeklyGuest
        })
    }
    useEffect(() => {
        getData()
    }, [params])
    console.log(chartData.user)
    return (
        <div className='LineChart'>
            <h2>Activities</h2>
            <div className='fx jus-between'>
                <div className='dropDown' onMouseLeave={()=>setDropDown(false)}>
                    <span
                        onClick={() => setDropDown(!dropDown)}
                        className='fx gap-5 al-cnt'>{params} 2023<DownArrow /></span>
                    {dropDown && <ul className='dropDownitems'>
                        {
                            months.map((month) => {
                                return (<li onClick={() => {
                                    setParams(month)
                                    setDropDown(false)
                                }
                                }>{month}</li>)
                            })
                        }
                    </ul>}
                </div>
                <div className='fx switch gap-10'>
                    <div className='fx-cnt gap-10'>
                        <div className='dot'></div>
                        Guest
                    </div>
                    <div className='fx-cnt gap-10'>
                        <div className='dot user'></div>
                        User
                    </div>
                </div>
            </div>
            <div className='chart'>
                <Line data={data} options={options}></Line>
            </div>
        </div>
    )
}

export default LineChart