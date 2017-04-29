// Beowulf - senses.js
// Senses.

Gpio = require('onoff').Gpio
ip = require('ip')

// Motion
var pin = 14
var pir = new Gpio(pin, 'in', 'rising')

// How to sense...
pir.watch(function(err, value) {

    if (err) exit()

    // ...the experience...
    var type = 'event'  
    var when = Date.now()
    var where = ip.address().replace(/\D/g,'') // strip dots in ip

    // DEPRECATED : var where = parseInt(ip.address().replace(/\D/g,'')) 

    // ...formated as 3d vector string...
    //var data = { 'event' : where + ',' + when + ',' + value } 

    // ...formated as 2d vector string...
    var data = { 'motion' : where + ',' + when}
    //var data = { 'event' : when + ',' + value}
    //var data = { 'event' : where + ',' + value}
    
    // DEPRECATED : var data = { 'motion': value,  'where' : where, 'when' : when } 

    console.log (type , data)

    // ...if sensor value crosses the threshold, remember the experience.   
    if(value >= 1) require('./remember.js').remember(type, data, err)

})

console.log('SENSING...')

// Leave gracefully, clear the io. 
function exit() {
  pir.unexport()
  process.exit()
}