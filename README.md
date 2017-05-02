# The Cluster - Beowulf AI
An example build of The Cluster. Beowulf AI is a series of bluetooth connected nodes sensing and learning. 

## Getting Started

To replicate this early build run Beowulf on three raspberry pi 3's in ble range with motion sensors attached to GPIO pin 14 (pin 8 on the board).

### Install

1. Clone this repository
```
git clone https://github.com/lolotrgeek/the-cluster/
```

2. Go to the directory and install it
```
cd the-cluster
npm install
```

3. run it
```
node beowulf
```

It will perform a series of tests and then begin scanning for nodes and sensing.

### Developement

This code is in extremely early phase of development, I am still in the process of translating the concept into code.
If you run this please let me know of any bugs or errors you encounter.

### Errors

Installing dependencies, if the install fails at the dependencies try the following command
```
npm install -g clusters gun ip node-machine-id node-schedule onoff q bleno noble
```

I have also noticed some nodes virtually 'cloning' themselves in the cluster, not sure if error or evolution...

When learning it sometimes crashes, need to build in better handler to revive dead nodes.

### TODO
refactor: clear globals, refine, error handling, logging

IP to BLE rangefinder

implement consolidation algorithm

make modular

dream state

## Built With

* [nodeJS](https://nodejs.org/en/) - Application framework
* [gunDB](https://github.com/amark/gun) - Distributed Database
* [clusters](https://github.com/NathanEpstein/clusters) - kMeans implementation
* [bleno](https://github.com/sandeepmistry/bleno) - BLE advertiser
* [noble](https://github.com/sandeepmistry/noble) - BLE central module

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE.md](https://github.com/lolotrgeek/the-cluster/blob/master/LICENSE) file for details

## Acknowledgments

* Using Mattias Ask's noble ble range finder 
