const express = require('express');
const cors = require('cors')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //Middleware
        this.middlewares();
        //Rutas de mi apliacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
        
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at port ${this.port}...`);
        });
    }
}

module.exports = Server;