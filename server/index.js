const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const port = dotenv.parsed?.PORT_SERVER || 3001;
console.log(dotenv)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
