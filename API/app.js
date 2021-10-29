const express = require('express')
const app = express()
const port = 8082


app.get('/', (req, res) => {
  res.send('prueba')
})

app.listen(port, () => {
  console.log(`Aplicación corriendo en: http://localhost:${port}`)
})