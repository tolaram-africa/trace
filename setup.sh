#!/bin/bash

## Improt aliases

sudo rm -rf ~/docker.temp/* &&
  mkdir -p ~/docker.temp/{postgres,scylla,minio,redis,valhalla,traccar-data,traccar-logs}
