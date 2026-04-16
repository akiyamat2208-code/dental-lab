const fs = require('fs');
const now = Date.now().toString();
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('__BUILDTIME__', now);
fs.writeFileSync('index.html', html);
console.log('Build version:', now);
