const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Running backend here!')
})

app.post('/api/addDays', (req, res) => {
  console.log("req", req.body)
  if(!req.body || !req.body.date){
    res.json({success:false, info:"Post a Date"})
  }else{
    let date = req.body.date;
    let days = req.body.days || 0;

    var result = new Date(date);
    result.setDate(result.getDate() + days);
    console.log(result)
    res.json({success:true, info:result})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})