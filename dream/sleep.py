# Beowulf - sleep.py
# Move data to and from dream (Python <-> Nodejs)

# Not every part of the cluster can or will dream...

#...we dream in python so we can use tensorflow and scikit...

#... parts of the cluster that cannot execute python will not dream.

#... Needless to say the dream is not ready yet. Still forging the algorithms. Stay tuned.

import sys
import json
import numpy as np

# Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # parse data
    return json.loads(lines[0])

def main():
    # get data as an array from read_in()
    lines = read_in()

    np_lines = np.array(lines)

    # use numpys sum method to test return 
    lines_sum = np.sum(np_lines)

    # return the sum to the output stream
    print lines_sum

# start process
if __name__ == '__main__':
    main()