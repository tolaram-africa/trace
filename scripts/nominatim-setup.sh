#!/bin/bash
## TODO: https://github.com/gpproton/nominatim-swarm/blob/main/docker-entrypoint.sh
## https://hub.docker.com/r/mediagis/nominatim
# Defaults
NOMINATIM_DATA_PATH=${NOMINATIM_DATA_PATH:="/srv/nominatim/data"}
NOMINATIM_BACKUP_PATH=${NOMINATIM_BACKUP_PATH:="/srv/nominatim/backups"}
NOMINATIM_DATA_LABEL=${NOMINATIM_DATA_LABEL:="data"}
NOMINATIM_PBF_URL=${NOMINATIM_PBF_URL:="http://download.geofabrik.de/asia/maldives-latest.osm.pbf"}
NOMINATIM_POSTGRESQL_DATA_PATH=${NOMINATIM_POSTGRESQL_DATA_PATH:="/var/lib/postgresql/12/main"}
NOMINATIM_THREADS=${THREADS:="8"}
NOMINATIM_MODE=${NOMINATIM_MODE:="RESTORE"}
