#!/usr/bin/env bash

package_name=$1
temp_dir="/tmp/ypx/$package_name/$(date +%s%N)"
mkdir -p $temp_dir
(cd $temp_dir; yarn add $package_name) && (PATH="$temp_dir/node_modules/.bin":$PATH; "$@")
rm -rf $temp_dir