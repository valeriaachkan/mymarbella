const axios = require('axios');
const express = require('express');
const path = require('path');

const apiKey = 'e599237279274f635942f36d155c226f2cc1f131';
const p1 = '1014905';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/properties', async (req, res) => {
  try {
    const response = await axios.get('https://webapi-v6.resales-online.com//api/Search/Search', {
      headers: {
        'p2': apiKey,
        'p1': p1
      },
      params: {
        'p_agency_filterid': '1' 
        // add any required query parameters here
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});