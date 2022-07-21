import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.json({
    message: 'hello',
  })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${4000}`)
})
