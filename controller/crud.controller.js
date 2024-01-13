let mongoData = require('../models/crud.model');

let crudController = {
    createEntry : async function(req,res){
        try {
            let data = mongoData.createEntry(req.body)
            await res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    updateEntry : async function(req,res){
        try {
            let data = mongoData.updateEntry(req.body)
            await res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    fetchEntry : async function(req,req){
        try {
            let data = mongoData.updateEntry(req.body)
            await res.send(data)
        } catch (error) {
            console.log(error)
        }
    },

    deleteEntry : async function(req,res){
        try {
            let data = mongoData.updateEntry(req.body)
            await res.send(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = crudController ;