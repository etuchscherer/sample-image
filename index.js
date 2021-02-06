const express = require('express')
const app = express()
const port = 80;

app.get('/', (req, res) => {
  res.json({ status: "ok", message: "json response" });
})

app.get('/healthcheck', (req, res) => {
  res.json({ status: "ok", message: "system online" });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})