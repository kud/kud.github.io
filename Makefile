# BLUE="\x1b[34;01m"
# CYAN="\x1b[36;01m"
# GREEN="\x1b[32;01m"
# RED="\x1b[31;01m"
# GRAY="\x1b[37;01m"
# YELLOW="\x1b[33;01m"

NO_COLOR    		= \x1b[0m
INFO_COLOR  		= \x1b[34;01m
SUBINFO_COLOR  	= \x1b[36;01m
OK_COLOR    		= \x1b[32;01m
WARN_COLOR  		= \x1b[33;01m
ERROR_COLOR 		= \x1b[31;01m

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
	@ echo '  make watch      Compile and watch'
	@ echo '  make server     HTTP server'
	@ echo '  make compile    Compile'
	@ echo '  make deploy     Deploy on `master` branch'
	@ echo ''


install:
	@ echo "$(INFO_COLOR)❯ Installing...$(NO_COLOR)"
	@ echo ""
	@ npm install gulp grunt-cli -g
	@ npm install
	@ echo ""
	@ echo "$(OK_COLOR)✔ Installed!$(NO_COLOR)"

update:
	@ echo "$(INFO_COLOR)❯ Updating...$(NO_COLOR)"
	@ echo ""
	@ npm update
	@ echo ""
	@ echo "$(OK_COLOR)✔ Updated!$(NO_COLOR)"

watch:
	@ echo "$(INFO_COLOR)❯ Watching...$(NO_COLOR)"
	@ echo ""
	@ gulp

server:
	@ echo "$(INFO_COLOR)❯ Creating a server...$(NO_COLOR)"
	@ echo ""
	@ cd dist && bloodyserver

compile:
	@ echo "$(INFO_COLOR)❯ Compiling...$(NO_COLOR)"
	@ echo ""
	@ gulp dev
	@ echo ""
	@ echo "$(OK_COLOR)✔ Compiled!$(NO_COLOR)"

deploy:
	@ echo "$(INFO_COLOR)❯ Deploying...$(NO_COLOR)"
	@ echo ""
	@ echo "$(SUBINFO_COLOR)❯❯ Compiling...$(NO_COLOR)"
	@ gulp dev
	@ echo "$(SUBINFO_COLOR)❯❯ Uploading...$(NO_COLOR)"
	@ grunt gh-pages
	@ echo ""
	@ echo "$(OK_COLOR)✔ Deployed!$(NO_COLOR)"
