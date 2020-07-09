/*console.log('Un %s y un %s', 'perrito', 'gatito')

console.info('Es lo mismo que el log')
console.warn('Es lo mismo que Error')

console.assert(42 == '42')
console.assert(42 === '42')

console.trace('Hello')*/


// Para crear un debugger

const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('Hello, inicia la fiesta...')

// Para ejecturlo necesitamos pasarlo con NODE_DEBUG como parametro.
// NODE_DEBUG=foo 