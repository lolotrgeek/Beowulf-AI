// Beowulf - beowulf.js
// .. I shall fulfill that purpose, prove myself with a proud deed or meet my death...

var id = require ('node-machine-id')
me = id.machineIdSync()

var ip = require('ip')    
where = ip.address()

require ('./awake.js')