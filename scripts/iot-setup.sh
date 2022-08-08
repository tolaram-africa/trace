#!/usr/bin/env bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
git clone --recursive https://github.com/traccar/traccar.git
(cd traccar/traccar-web && git checkout master)
(cd traccar && git checkout master && ./gradlew build && sleep 2)

wget http://cdn.sencha.com/cmd/7.1.0.15/no-jre/SenchaCmd-7.1.0.15-linux-i386.sh.zip
unzip SenchaCmd-*.zip
rm SenchaCmd-*.zip
./SenchaCmd-*.sh -q
rm SenchaCmd-*
export PATH=$PATH:~/bin/Sencha/Cmd/

(cd traccar/traccar-web && ./tools/package.sh)
cd traccar/setup &&
  wget https://github.com/ojdkbuild/contrib_jdk11u-ci/releases/download/jdk-11.0.8%2B10/jdk-11.0.8-ojdkbuild-linux-x64.zip &&
  ./package.sh -o other
