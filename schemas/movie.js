const mongoose =require ('mongoose')

const movieSchema = mongoose.Schema({

    title:{
        type: String
    },
    description:{
        type: String
    },
    rating:{
        type: Number
    }
})
module.exports = mongoose.model('Movie',movieSchema) 


