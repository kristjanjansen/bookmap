#!/bin/sh

# Getting source data

wget http://geoportaal.maaamet.ee/docs/haldus_asustus/omavalitsus_shp.zip
unzip omavalitsus_shp.zip

# Simplifying the data

mapshaper -i 100 --repair omavalitsus_20131101.shp -o o.shp

# Converting to the right projection (from EPSG:3301 to EPSG:4326)

ogr2ogr -t_srs EPSG:4326 o_fixed.shp o.shp

# Building the SVG 

kartograph build.json -o client/map.svg

rm *.dbf
rm *.prj
rm *.shp
rm *.shx
rm *.zip