
const {Router} = require('express');
const { get, 
        post,
        put,
        del } = require('../controllers/user');

const router = Router();

router.get('/', get);

router.post('/', post);

router.put('/:id', put);

router.delete('/', del);

module.exports = router;