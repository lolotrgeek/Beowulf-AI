// Beowulf - learn.js
// When to recall events.
// TODO: trigger recall from 'significant' experiences.

// This is unsupervised learning, but you still need to stay in school...

schedule = require('node-schedule')

// Recall and learn every hour.
schedule.scheduleJob('0 * * * *', () => { 
    
    console.log ('LEARNING...')

    // To learn you must first recall events...
    require('./recall.js')

    // ...then act on them...
    require('./behavior.js')
 })