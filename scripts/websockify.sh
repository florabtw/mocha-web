#!/bin/bash

docker run                     \
    --net host                 \
    --rm                       \
    -it    \
    siboulet/websockify        \
    9000                       \
    206.189.219.65:8026        \
