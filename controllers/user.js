
const {response} = require('express');


const get = (req, res = response) => {
    
    const {q, nombre = "No name", apellido, page = 1, limit} = req.query
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apellido,
        page,
        limit
    });
}

const post = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: "post API - controlador",
        nombre,
        edad
    });
}

const put = (req, res) => {
    const { id } = req.params
    res.json({
        msg: "put API - controlador",
        id
    });
}

const del = (req, res) => {
    res.json({
        msg: "delete API - controlador"
    });
}

module.exports = {
    get,
    post,
    put,
    del
}
