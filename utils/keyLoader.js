const fs = require('fs');
const path = require('path');

const keysDir = path.join(__dirname, '..', 'keys');

const privateKey = fs.readFileSync(path.join(keysDir, 'private.pem'), 'utf8');
const publicKey  = fs.readFileSync(path.join(keysDir, 'public.pem'),  'utf8');

module.exports = { privateKey, publicKey };
