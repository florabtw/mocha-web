#!/bin/bash

docker run                     \
    --net host                 \
    --rm                       \
    -d                         \
    siboulet/websockify        \
    8026                       \
    206.189.219.65:8026        \
