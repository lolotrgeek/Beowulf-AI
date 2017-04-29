/*
  Continously scans for peripherals and prints out message when they enter/exit
    In range criteria:      RSSI < threshold
    Out of range criteria:  lastSeen > grace period
  based on code provided by: Mattias Ask (http://www.dittlof.com)
*/

// Beowulf - cluster_others.js
// Find nearby nodes.

noble = require('noble')
Cluster = require('gun')

RSSI_THRESHOLD    = -90
EXIT_GRACE_PERIOD = 2000 // milliseconds

inRange = []
nodes = []

// Look for anything in BLE range...
noble.on('discover', function(peripheral) {
  if (peripheral.rssi < RSSI_THRESHOLD) {
    // ignore
    return
  }

  perid = peripheral.id
  entered = !inRange[perid]

  if (entered) {
    inRange[perid] = {
      peripheral: peripheral
    }

    // Something Entered our range...
    console.log('"' + peripheral.advertisement.localName + '" entered (RSSI ' + peripheral.rssi + ') ' + new Date())
  
    // ...Are you in the cluster?
     node = peripheral.advertisement.localName

     // If part of the cluster...
     if (node && node !== 'undefined') {
     
      // ...add as a node...
      nodeAdd = nodes.push(node)

      console.log ('NODES:', nodes)
      
      exports.clusterSize = nodes.length

      // ...rebuild cluster with new nodes.
      cluster = Cluster(nodes)

     }
    
  }

  inRange[perid].lastSeen = Date.now()
})

setInterval(function() {
  for (perid in inRange) {
    if (inRange[perid].lastSeen < (Date.now() - EXIT_GRACE_PERIOD)) {
      peripheral = inRange[perid].peripheral
    
      // Exited Range
      console.log('"' + peripheral.advertisement.localName + '" exited (RSSI ' + peripheral.rssi + ') ' + new Date())

      //remove ip

      delete inRange[perid]
    }
  }
}, EXIT_GRACE_PERIOD / 2)

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {

    console.log ('SCANNING...')
    noble.startScanning([], true)

  } else {
    noble.stopScanning()
  }
})