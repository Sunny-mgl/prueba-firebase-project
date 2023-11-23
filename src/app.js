const express = require('express');

const PORT = 8000

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hola Mundo')
})

app.listen(PORT, () => {
    console.log(`Running on the port ${8000}`)
})