const connectDB = require('./db/connect');
const Resource = require('./models/resource');

const resources = require('./resources.json');

//adds everything from products.json to the db
const populateProducts = async () => {
    console.log('populate')
    try {
        await connectDB(process.env.MONGO_URI);
        await Resource.deleteMany()
        await Resource.create(resources)
        console.log('Success!!!!')
    } catch (error) {
        console.error(error)
    }
}

module.exports = populateProducts