// Beowulf - cluster_self.js
//  You are a node.

bleno = require('bleno')
ip = require('ip')
Cluster = require('gun')
http = require('http')

// Start server. Be the cluster.
server = http.createServer()

cluster = Cluster({web: server})

// Listen for data.
server.listen(8080, function () {
  port = server.address().port
  address = ip.address() + ':' + port + '/cluster'
  console.log('LISTENING:', address )
})

// Advertise address over BLE
bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state)

  if (state === 'poweredOn') {

    bleno.startAdvertising(address, ['ec00'])

  } else {
    bleno.stopAdvertising()
  }
})