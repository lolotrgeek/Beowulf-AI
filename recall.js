// Beowulf - recall.js
// Recall data.

Q = require('q')
higher = require('./high.js')
Cluster = require('gun')
cluster = Cluster()

// Define the data
// TODO: once behaviors are reinforced, let the machine define these 
var type = 'event'
var what = 'motion'

// Promise to return data...
Q.denodeify(cluster.get(type).map().path(what).on(
    
    (recaller, err) => {
        
        // ...ready the data...
        high = require ('./high.js')

        recalling = recaller.split(',')

        recalled = []

        for(i=0; i < recalling.length; i++)
            recalled.push(parseInt(recalling[i]))

            // ...transcend the data...
            high.data.push(recalled)

    })
)
.then 
    //.. fulfull the promise, move the data to the mind.
    { console.log(higher.data), require('./cluster_mind.js')}
