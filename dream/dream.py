# Beowulf - dream.py
# When the Cluster sleeps it dreams. Building long-term memories.

import sleep

import numpy as np

# we need tensorflow to dream...
try: 
    import tensorflow as tf
except:
    print 'I cannot dream.'
    print sys.exc_info()
    exit