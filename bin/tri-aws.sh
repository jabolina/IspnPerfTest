#!/bin/bash

conf_dir=`dirname $0`/../conf

exec `dirname $0`/perf-test.sh -cfg jgroups-aws.xml -jgroups-cfg control-aws.xml -factory org.cache.impl.tri.TriCacheFactory $*
