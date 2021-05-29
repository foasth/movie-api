module.exports.HELLO =(req,res)=>{

    res.send('Hello World!')
}


module.exports.SEND_DATA = (req,res)=>{

    console.log(req.body)
    res.send('OK!')

}