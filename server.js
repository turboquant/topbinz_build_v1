const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('./'));

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
}); 