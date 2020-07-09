const util = require('util')

const helloPluto = util.deprecate(()=> {
  console.log('Hello Pluto')
}, 'Pluto is deprecated. Its not a planet anymore')

helloPluto()