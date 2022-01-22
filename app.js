const express = require('express');
const app = express();

app.use(express.static('./public'))

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})