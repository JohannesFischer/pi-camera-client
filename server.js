const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./build'));

app.listen(port);

console.log(`Server started on: http://0.0.0.0:${port}`);
