import numpy as np
import matplotlib.pyplot as plt
from random import random
import seaborn as sns
import sys

def generate_zbravatar_pattern():
    rd_half_zbravatar = np.random.randint(2, size=(7, 4))
    zbravatar_pattern = np.concatenate((rd_half_zbravatar, np.flip(rd_half_zbravatar[:, :3], axis=1)), axis=1)
    return zbravatar_pattern

def generate_zbravatar(i):
    zbravatar_pat = generate_zbravatar_pattern()

    plt.imshow(zbravatar_pat, cmap=sns.cubehelix_palette(rot=-random(), as_cmap=True, gamma=2))
    plt.axis('off')
    plt.savefig('../zbraa/src/assets/imgs/zbravatar_{}.png'.format(i))


if __name__ == "__main__":
    if len(sys.argv) >= 1:
        i = sys.argv[1]
    else:
        i = 0
    generate_zbravatar(i)
