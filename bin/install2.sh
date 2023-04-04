#!/bin/bash

## cisco-e160dp-01.khw2.lab.eng.bos.redhat.com

## Creates a dev env in a cloud based host
PWD=QwAo2U6GRxyNPKiZaOCx

export ISPN_PERF=IspnPerfTest
export ZIP_FILE=$HOME/$ISPN_PERF.zip
export DIR=$HOME/$ISPN_PERF


#### run as user bela

echo "-- Unzipping $ISPN_PERF.zip"
unzip $ISPN_PERF.zip

## Install sdkman
echo "-- Installing sdkman"
curl -s "https://get.sdkman.io" | bash

source $HOME/.bashrc

## Install Java 11 and 19

echo "-- Installing JDK 11"
sdk install java 11.0.12-open
sdk use java 11.0.12-open


#sdk install java 21.ea.16-open










