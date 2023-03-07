const authorize = (req,res,next) => {
    const {user} = req.query;
    if(user === 'Anuj') {
        req.user = {name: 'Anuj', id: 2000}
        // res.status(201).send(`Authorization Successful!
        // <br>ID: ${req.user.id}
        // <br>Name: ${req.user.name}`)
        next();
    }
    else {
        res.status(401).send(`Unauthorized!`);
    }
    console.log(`Authorization Successful!`);
    next();
}


module.exports = authorize;