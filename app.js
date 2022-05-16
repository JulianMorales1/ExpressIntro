const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Julian Morales')
})

app.get('*', (req, res)=> {
    res.status(404).send("404")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

