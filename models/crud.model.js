const {createEntry} = require('../controller/crud.controller');
const {updateEntry} = require('../controller/crud.controller');
const {fetchEntry} = require('../controller/crud.controller');
const {deleteEntry} = require('../controller/crud.controller');

const MONGO_URL = 'MongoURL';

var mongoose = require('mongoose');
const Schema = mongoose.Schema ;
let crudSchema = new Schema({
    name:String,
    id:String,
    address:String,
},{collection:"frnd"})

exports.createEntry = async(data) => {
    mongoose.connect(MONGO_URL,{
        useUnifiedTopolgy: true,
        useNewUrlParser: true
    });

    let mongoConnection = await mongoose.connection.useDb("CRUDfrnd")
    console.log(JSON.stringify(data))
    let resp = mongoConnection.model("frnd",crudSchema).insertMany([data]);
    return resp
}

exports.updateEntry = async(data) => {
    mongoose.connect(MONGO_URL,{
        useUnifiedTopolgy: true,
        useNewUrlParser: true
    });

    let mongoConnection = await mongoose.connection.useDb("CRUDfrnd")
    console.log(JSON.stringify(data))
    let resp = mongoConnection.model("frnd",crudSchema).updateOne({_id:data._id},{$set:{id:data.id}});
    return resp
}

exports.fetchEntry = async(data) => {
    mongoose.connect(MONGO_URL,{
        useUnifiedTopolgy: true,
        useNewUrlParser: true
    });

    let mongoConnection = await mongoose.connect.useDb("CRUDfrnd")
    console.log(JSON.stringify(data))
    let resp = mongoConnection.model("frnd",crudSchema).find();
    return resp
}

exports.deleteEntry = async(data) => {
    mongoose.connect(MONGO_URL,{
        useUnifiedTopolgy: true,
        useNewUrlParser: true
    });

    let mongoConnection = await mongoose.connect.useDb("CRUDfrnd")
    console.log(JSON.stringify(data))
    let resp = mongoConnection.model("frnd",crudSchema).deleteOne({"name":data.name});
    return resp
}

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});