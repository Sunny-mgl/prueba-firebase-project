const express = require('express');
const morgan = require('morgan')

const PORT = 8000

const app = express();

app.use(morgan('dev'))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hola Mundo')
})

app.listen(PORT, () => {
    console.log(`Running on the port ${8000}`)
})