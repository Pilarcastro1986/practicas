
function postUsers(req, res){
    res.send('holaaa');
}

function getUsers(req, res){
    res.send('holaaa get');
}
function patchUsers(req, res){
    res.send('holaaa patch');
}


module.exports = {postUsers, getUsers ,patchUsers }