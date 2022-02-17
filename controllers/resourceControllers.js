const Resource = require('../models/resource');

const getAllObjects = async (req, res) => {
    try {
        // console.log('connection success')
        const resources = await Resource.find({})
        res.status(201).json({resources})
    } catch (error) {
        // console.log('connection failed')
        res.status(500).json({msg:error})
    }
}

const getObject = async (req, res) => {
    try {
        const {id} = req.params;
        const resource = await Resource.findById(id).exec();
        res.status(201).json({resource})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createObject =  async (req, res) => {
    try {
        const resource = await Resource.create(req.body)
        res.status(201).json({resource})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateObject = async (req, res) => {
    try {
        const {id} = req.params;
        const newResource = req.body;
        const resource = await Resource.findOneAndUpdate({ _id: id }, newResource)
        res.status(201).json({newResource})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteAll = async (req, res) => {
    try {
        await Resource.deleteMany({})
        res.status(201).json({success: true})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteObject = async (req, res) => {
    try {
        const {id} = req.params;
        const resource = await Resource.findOneAndDelete({ _id: id });
        res.status(201).json({resource})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllObjects,
    getObject,
    createObject,
    updateObject,
    deleteAll,
    deleteObject
}