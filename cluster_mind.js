// Beowulf - cluster_mind.js
// Form patterns from data.

clusterMind = require('clusters')
higher = require('./high.js')

// find the cluster size
//clusterOthers = require('./cluster_others.js')
//clusterSize = clusterOthers.size

// Set k to number of nodes on the cluster
//clusterMind.k (clusterSize)
clusterMind.k (3)

// 'n' iterations
clusterMind.iterations(750)

// seek transcedent data
clusterMind.data(higher.data)

// find patterns by clustering the data
var pattern = clusterMind.clusters()

// store the centroids, later, for more advanced behaviors we will store the whole graph
var centroid = JSON.stringify(pattern[0]['centroid'])

var data = { 'centroid' : centroid.replace(/[\[\]']+/g,'') }

var type = 'pattern'

// Remember the pattern
require('./remember.js').remember(type, data, err)