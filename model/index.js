let db = require('../config');

let {hash, compare, hashSync} = require('bcrypt');

let {createToken} = require('../middleware/AuthenticatedUser');

