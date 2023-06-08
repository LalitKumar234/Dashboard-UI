import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { DownArrow } from '../../../Assets';
import { axiosGet } from '../../../axiosService';

ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
    const [dropDown, setDropDown] = useState(false)
    const [chartData, setChartData] = useState({
        products: [],
        sale: []
    });
    const [inPercent, setInPercent] = useState([])
    const months = ["Jan - Feb", "Feb - March", "March - April", "April - May", "May - June", "June - July"]
    const [params, setParams] = useState(months[0]);

    const data = {
        labels: chartData.products,
        datasets: [
            {
                label: 'Top Products',
                data: chartData.sale,
                backgroundColor: [
                    '#98D89E',
                    '#F6DC7D',
                    '#EE8484'
                ],
                borderWidth: 0,
            },
        ],
    };
    const getData = async () => {
        const response = await axiosGet(`topproducts/${params}`)
        console.log(response.data[0])
        setChartData({
            products: response.data[0].products,
            sale: response.data[0].sale
        })
    }
    const calculatePercentage = () => {
        const totalSum = chartData.sale.reduce((sum, value) => sum + value, 0);
        const percentages = chartData.sale.map(value => ((value / totalSum) * 100).toFixed(2));
        console.log(percentages);
        setInPercent(percentages)

    }
    useEffect(() => {
        getData()
        calculatePercentage()
    }, [params])


    return (
        <div className='pieChartContainer'>
            <div className='fx al-cnt jus-between'>
                <h2>Top products</h2>
                <div className='dropDown'>
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
            </div>
            <div className='pieChart fx al-cnt gap-40 mt-40 jus-around'>
                <Pie data={data} />
                <div className='legends fx fx-d-col gap-20'>
                    <div className='fx al-start gap-10'>
                        <div className='legend'></div>
                        <div>
                            <h4>{data.labels[0]}</h4>
                            <span>{inPercent[0]}%</span>
                        </div>
                    </div>
                    <div className='fx al-start gap-10'>
                        <div className='legend yellow'></div>
                        <div>
                            <h4>{data.labels[1]}</h4>
                            <span>{inPercent[1]}%</span>
                        </div>
                    </div>
                    <div className='fx al-start gap-10'>
                        <div className='legend red'></div>
                        <div>
                            <h4>{data.labels[2]}</h4>
                            <span>{inPercent[2]}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart