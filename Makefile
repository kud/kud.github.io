install:
	npm install gulp grunt-cli -g
	npm install
	bower install

update:
	npm update
	bower update

watch:
	gulp

server:
	cd dist && bloodyserver

compile:
	gulp dev

deploy:
	make compile
	grunt gh-pages
