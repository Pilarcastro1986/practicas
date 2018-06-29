


function getElement(req, res){
    // res.write('segundo pasa por la fn en el controller');
    console.log(req.modelos)
    res.json(req.modelos)
}


function postElement(req, res){
    req.modelos.usuarios.create({
        name: req.body.name,
        avatar: req.body.avatar
    }).then(function(usuario){
        res.json(usuario)
    })
}

module.exports = {getElement, postElement}