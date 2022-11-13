const router = require('express').Router();
const fs = require('fs');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).send('Home page!');
});

router.get('/getitems', async (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  const reciept = data[req.query.id];
  if (!reciept) return res.status(404).send('Reciept not found');
  res.send(reciept);
});


module.exports = router;
