all:
	mkdir -p dist
	mkdir -p dist/firefox
	mkdir -p dist/chrome
	cd src && \
	web-ext lint && \
	web-ext -v -a ../dist/firefox build && \
	cd .. && \
	cp -r src/* dist/chrome

clean:
	rm -rvf dist
