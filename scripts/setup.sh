#!/bin/bash
## Improt aliases

mkdir -p ~/docker-registry/
# rm -r -f -I ~/docker-temp/{postgres,minio,redis,valhalla,traccar-data,traccar-logs}/* &&
mkdir -p ~/docker-temp/{postgres,minio,redis,valhalla,traccar-data,traccar-logs}
docker rm -rf ~/docker-temp/{minio,redis,traccar-data,traccar-logs}/
