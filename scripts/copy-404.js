// copy-404.js
const fs = require('fs-extra')
fs.copySync('dist/index.html', 'dist/404.html')
console.log('✅ 404.html 已同步')