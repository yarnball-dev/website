# Install NGINX from development PPA
# https://www.nginx.com/resources/wiki/start/topics/tutorials/install
nginx=development
add-apt-repository ppa:nginx/$nginx
apt-get update
apt-get install nginx

# Create user
adduser peach

# Setup sudo for user
# https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-an-ubuntu-14-04-vps
visudo

# Setup nodejs 5
# https://github.com/nodesource/distributions#installation-instructions
apt-get install curl
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install nodejs