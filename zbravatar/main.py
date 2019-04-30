import numpy as np
import matplotlib.pyplot as plt
from random import random
import seaborn as sns
import sys
import os

def generate_zbravatar_pattern():
    rd_half_zbravatar = np.random.randint(2, size=(7, 4))
    zbravatar_pattern = np.concatenate((rd_half_zbravatar, np.flip(rd_half_zbravatar[:, :3], axis=1)), axis=1)
    return zbravatar_pattern

def generate_zbravatar(i, zbraa_path):
    zbravatar_pattern = generate_zbravatar_pattern()

    plt.imshow(zbravatar_pattern, cmap=sns.cubehelix_palette(rot=-random(), as_cmap=True, gamma=2))
    plt.axis('off')
    plt.savefig(os.path.join(zbraa_path, 'zbravatar_{}.png'.format(i)))
    print(os.path.join(zbraa_path, 'zbravatar_{}.png'.format(i)))

if __name__ == "__main__":
    if len(sys.argv) >= 2:
        i = sys.argv[1]
        zbravatar_path = sys.argv[2]
    else:
        i = 0
        zbravatar_path = '../zbraa/src/assets/imgs/'
    generate_zbravatar(i, zbravatar_path)

