// Beowulf - behavior.js
// Reinforce patterns and perform actions.

Cluster = require('gun')
cluster = Cluster()

// Retrieve patterns...
cluster.get('pattern').map().path('centroid').on( function (pattern)
{
    
    // How frequent are the patterns?
    var arr = []
    arr.push(pattern)
    frequency = arr.length

    console.log(frequency)

    // Pattern reinforcement algorithm...
    if (frequency >= 1) {

        // ...frequency set low for testing...

        var similar = []
        var different = []

        // ...parse the pattern...
        var split =  pattern.split(',')
        var where = parseInt(split[0]) 
        var when = parseInt(split[1])

        console.log ('PATTERN: parsing...')

        var whereSum = 0    
        var whenSum = 0

        // ...get the average values in the pattern...
        for(i=0; i < where.length; i++){
            whereSum += parseInt( where[i], 10 )
        }
        var whereAvg = whereSum/where.length

        for(i=0; i < when.length; i++) {
            whenSum += parseInt( when[i], 10 )
        }
        var whenAvg = whenSum/when.length

        console.log ('PATTERN: averging...')

        // ...score each pattern by comparing it to the average pattern...
        var score =  ((whenAvg - when)/2 *  (whereAvg - when)/2) * 100 

        if (score >= 100)
            similar.push(pattern[i])    
        else {
            different.push(pattern[i])
        }

        console.log ('PATTERN: scoring...')
          
        // ..it is now reinforced, and relevent...
        console.log ('PATTERN: relevent.')

        //...apply an action.
        if (different.length >= similar.length) 
            console.log('Hello, I am different!')
        else 
            console.log('Hello!')
            
            //TODO: treat behaviors as events to the cluster

            // ...apply an action: MAC address to send wake packets
            //wol = require ('wake_on_lan')
            //var mac = 'xx:xx:xx:xx:xx'
            //wol.wake(mac, function(error) {

            //if (error) {

            // console.log('Failed to send wake packets.')

        // } else {

            // console.log('Awaking...')

        // }
            //})
    }
    else (console.log('PATTERN: irrelevent.'))
})

