// Beowulf - sleep.js
// Shut down sensations. Move data to and from the dream. (Nodejs <-> Python)

// Not every part of the cluster can or will dream...

//...we dream in python so we can use tensorflow and scikit...

//... parts of the cluster that cannot execute python will not dream.

//... Needless to say the dream is not ready yet. Still forging the algorithms. Stay tuned.

var senses = require('./senses.js')

senses.exit()

var spawn = require('child_process').spawn
var py = spawn('python', ['dream/sleep.py'])
var higher = require('./high.js')

var data = higher.data
var dataString = ''

py.stdout.on('data', function(data){
  dataString += data.toString()
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString)
});
py.stdin.write(JSON.stringify(data))
py.stdin.end()