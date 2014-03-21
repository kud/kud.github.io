help:
	@ echo ''
	@ echo 'Welcome to _kud.profile.'
	@ echo ''
	@ echo 'Usage:'
	@ echo ''
	@ echo '  make <command>'
	@ echo ''
	@ echo 'Commands:'
	@ echo ''
	@ echo '  make install    Install environment'
	@ echo '  make update     Update environment'
	@ echo '  make watch      Watch and compile'
	@ echo '  make server     HTTP server'
	@ echo '  make compile    Compile'
	@ echo '  make deploy     Deploy on `master` branch'
	@ echo ''

install:
	@ echo "❯ Installing..."
	@ npm install gulp grunt-cli -g
	@ npm install
	@ bower install

update:
	@ echo "❯ Updating..."
	@ npm update
	@ bower update

watch:
	@ echo "❯ Watching..."
	@ gulp

server:
	@ echo "❯ Creating a server..."
	@ cd dist && bloodyserver

compile:
	@ echo "❯ Compiling..."
	@ gulp dev

deploy:
	@ echo "❯ Deploying..."
	@ echo "❯❯ Compiling..."
	@ gulp dev
	@ echo "❯❯ Uploading..."
	@ grunt gh-pages
