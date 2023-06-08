const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data.json');
const { getChartData, pieChartData } = require('./controllers/chartData.controller');
const port = 3200

app.use(cors())

app.get('/chartdata', (req, res) => {
    res.send(data)
})

app.get('/chartdata/:month', getChartData)
app.get('/topproducts/:month', pieChartData)




app.listen(port, () => console.log(`http://localhost:${port}`))