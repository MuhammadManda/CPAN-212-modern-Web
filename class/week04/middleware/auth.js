const auth = (req,res,next) => {
    if (req.query.username == "Muhammad") {
        next();
    } else {
        res.send("Fuck off")
}
 }

export default auth;