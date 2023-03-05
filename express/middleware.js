function agedetector(req,res,next)
{
    if(req.query.age>18){
        next();
    }
    else{
        res.send("you cannot excess this website")
    }
}
module.exports=agedetector;