const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
