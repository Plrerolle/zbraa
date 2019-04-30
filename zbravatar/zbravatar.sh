#!/bin/bash
set -e

shift $((OPTIND-1))

if [ -z "$1" ]; then
    id=0
else
    id=$1
fi

if [ -z "$2" ]; then
    zbra_path='./'
else
    zbra_path=$2
fi


source activate zbravatar && python /home/pilou/ChNeuf/zbraa/zbravatar/main.py ${id} ${zbra_path}
echo "done"