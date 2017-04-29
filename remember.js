// Beowulf - remember.js
// Remember data by type.

err = null

module.exports.remember = remember

function remember(type, data, err) {
        
    // If a type exists...
    if (type) {

        //... remember data by that type.
        cluster.get(type).set(data)

        console.log ('Remembering ', data , 'as ' , type, '...')

    } else {
        
        console.log (err)
    }
}