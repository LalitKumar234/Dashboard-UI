const data = require('../data.json')
const topProducts = require('../pieChartdata.json');

const getChartData = (req, res) => {
    const filteredData = data.filter(m => m.month === req.params.month)
    if (!filteredData.length) res.sendStatus(404).send({ message: 'not found' })
    res.send(filteredData)
}

const pieChartData = (req, res) => {
    const filteredData = topProducts.filter(m => m.month === req.params.month)
    if (!filteredData.length) res.sendStatus(404).send({ message: 'not found' })
    res.send(filteredData)
}

module.exports = { getChartData, pieChartData }