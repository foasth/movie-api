const Movie = require('../schemas/movie')

module.exports.HELLO =(req,res)=>{

    res.send('Hello World!')
}


module.exports.SEND_DATA = (req,res)=>{

    console.log(req.body)
    res.send('OK!')

}
module.exports.ADD_MOVIE =(req,res)=>{
    
    console.log(req.body)
    const movie = new Movie(req.body)
    movie.save(req.body)
        .then(ok=>{
            res.send('OK')
        })
        .catch(err=>{
            res.send('NOT OK')
        })
}
module.exports.ALL_MOVIES =(req,res)=>{

    Movie.find()
        .then(movies=>{
            res.send(movies)
        })
        .catch(err=>{
            res.send('NOT OK')
        })

}

module.exports.EDIT_MOVIE =(req,res)=>{

    const id =req.body._id
    if(!id) return res.send('NO ID')
    Movie.findByIdAndDelete(id,{
        title: req.body.title,
        description :req.body.description,
        rating: req.body.rating
    })
    .then(ok=>{
        res.send('OK')

    })
    .catch(err=>{
        res.send('NOT OK')
    })

}

module.exports.DELETE_MOVIE =(req,res)=>{

}