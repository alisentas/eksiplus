cd src
web-ext -v -a ../dist/firefox build
cd ..
cp -r src/* dist/chrome
