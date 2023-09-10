const { json } = require("body-parser")

exports.Hello_Get = (req,res) => {
    res.status(200).json({status:"success", data:"Hello this is my first express rest api"})
}


exports.Hello_Post = (req,res) => {
    res.status(200).json({status:"success", data:"Hello this is my first express rest api"})
}