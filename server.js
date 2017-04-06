import express from 'express'
import init from './_data/init'
import dashboard from './_data/dashboard'
import cards from './_data/card'

const app = express()

// get the intended port number, use port 3000 if not provided
const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    console.log('App failed to start caused by %s', err.message)
  }

  console.log('App is listening at port %s', port)
});

app.use('/', express.static('./dist'));

app.get('/api/init', (req, res) => {
  res.send(init)
});

app.get('/api/dashboard', (req, res) => {
  const groupByType = cards.reduce((group, card) => {
    !group[card.Type] && (group[card.Type] = 0)
    ++group[card.Type]
    return group
  }, {})

  const response = []
  for (const type in groupByType) {
    response.push([type, groupByType[type]])
  }

  res.send(response)
});

app.post('/api/cards', (req, res) => {
  res.send(cards)
});