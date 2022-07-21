import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.json({
    message: 'hello',
  })
})

app.get('/:name', (req, res) => {
  const { name } = req.params
  res.json({
    message: `hello ${name}`,
  })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
