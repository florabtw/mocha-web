#!/bin/bash

docker run                     \
    --net host                 \
    --rm                       \
    -d                         \
    siboulet/websockify        \
    8027                       \
    mocha.nick.exposed:8026
