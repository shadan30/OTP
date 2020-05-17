const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('/second.ejs');
  alert("Mobile number accepted");
});

app.get('/register', (req, res) => {
  res.render('/first.ejs');
  alert("OTP Verified");
});
app.get('/final', (req, res) => {
  res.render('/final.ejs');
});


app.listen(3000);