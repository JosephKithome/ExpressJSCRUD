const express = require('express');
const app = express()
const postRoute = require('./routers/post.js');

const PORT = 4000;

app.use(express.json())
app.use('/',postRoute)

app.listen(PORT, () => console.log(`Server Running on port : http://localhost:${PORT}`));

