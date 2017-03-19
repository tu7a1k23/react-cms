import express from 'express';
import init from './_data/init';
import dashboard from './_data/dashboard';

const app = express();

// get the intended port number, use port 3000 if not provided
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('App failed to start caused by %s', err.message);
  }

  console.log('App is listening at port %s', port);
});

app.use('/', express.static('./dist'));

app.get('/api/init', function(req, res) {
  res.send(init);
});

app.get('/api/dashboard', function(req, res) {
  res.send(dashboard);
});