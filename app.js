const express = require('express');
const app = express();
const path = require('path');
const resources = require('./routes/resourceRoutes');
const connectDB = require('./db/connect');
const populateProducts = require('./populate');
require('dotenv').config();
//middleware functions
// const notFoundHandler = require('./middleware/notFound')
// const errorHandler = require('./middleware/errorHandler')

app.use(express.json());
app.use('/api/v1/resources', resources);
app.use(express.static("./public"));


// app.use(notFoundHandler)
// app.use(errorHandler)

const port = process.env.PORT || 3000;

app.get('/resource', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, './public/resources.html'));
})

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`)
// })

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();