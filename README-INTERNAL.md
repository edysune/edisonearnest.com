# EdisonEarnest.com INTERNAL DOCUMENTATION
Seperate documentation for non-source code topics like settings up nginx, certbot, server maintenence, etc.

# USEFUL BOOKMARKS
- https://getbootstrap.com/docs/5.1
- https://icons.getbootstrap.com/
- https://www.w3schools.com/cssref/css_selectors.asp
- https://github.com/coreybutler/nvm-windows/releases

# USEFUL COMMANDS
## Git Submodules
### 1. Updating submodules within a project: 
```
# update submodule in the master branch
# skip this if you use --recurse-submodules
# and have the master branch checked out

cd [submodule directory]
git checkout master
git pull
```

### 2. Committing submodule code within a project: 
```
# commit the change in main repo
# to use the latest commit in master of the submodule
cd ..
git add [submodule directory]
git commit -m "move submodule to latest commit in master"
```

### 3. Pushing submodule changes within a project: 
```
# share your changes
git push
```

### 4. Pulling submodule changes within a project: 
```
# another developer wants to get the changes
git pull
```

### 5. Updates submodule to latest
```
# this updates the submodule to the latest
# commit in master as set in the last example
git submodule update
```

## NVM

```
  // help screen and basic usage
  nvm

  // get nvm version
  nvm version

  //install latest version of node
  nvm install latest

  // get currently installed node versions
  nvm list

  // switch to version of node
  nvm use 20.5.1
```

# DEVOPS
## NGINX Configurations for https/SSL (non-Certbot method)
My initial steps for settings up https/ssl certificates for site manually.

1. First set of steps may involve creating a CSR using openssl, then using that to create a certificate from your provider. KEEP the key generated when CSR is created, and then keep the CRT that is generated from your provider. Both will need to be put onto your server. These specific steps are before we touch the server.

2. Second set of steps involves nginx on the server:
- Configurations stored in the ngingx_config file allow redirection of http to https. Once configurations are placed, you may need to check some of the hardcoded values and paths.
- Always edit in `/etc/nginx/sites-available/<configuration>`, not sites-enabled.
- After editing use `sudo nginx -t` to validate configurations, and then `sudo nginx -s reload` OR `sudo systemctl reload nginx` to refresh site.
- Any errors, you should check the error logs in `/var/log/nginx/error.log`.
- It might also be a good idea to give permissions to key and crt files using chmod 700.

## Managing Site Certificates (Certbox method)
Certificate management for site is done through [letsencrypt.org](https://letsencrypt.org/).

1. Install snapd
2. Uninstall certbot from default OS package manager if installed
```
sudo apt-get remove certbot
sudo dnf remove certbot
sudo yum remove certbot.
```
3. [Install Certbot](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal) with snapd
```
sudo snap install --classic certbot
```
4. Prepare the Certbot command 
```
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```
5. Either get and install your certificates or, just get a certificate

```
sudo certbot --nginx
sudo certbot certonly --nginx
```
6. Test automatic renewal
  - The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:
```
sudo certbot renew --dry-run

// The command to renew certbot is installed in one of the following locations:
// /etc/crontab/
// /etc/cron.*/*
// systemctl list-timers
```

## Installing snapd on Ubuntu
See [Guide on Installing Snap on Ubuntu](https://snapcraft.io/docs/installing-snap-on-ubuntu):

```
sudo apt update
sudo apt install snapd
sudo snap install hello-world
```

## Ubuntu server unable to update in DigitalOcean droplets
if [ubuntu server is unable to update](https://www.digitalocean.com/community/questions/unable-to-apt-update-my-ubuntu-19-04), specifically with DigitalOcean see following fix:

```
// The repositories for older releases that are not supported (like 11.04, 11.10 and 13.04) get moved to an archive server. There are repositories available at http://old-releases.ubuntu.com.

sudo sed -i -re 's/([a-z]{2}\.)?archive.ubuntu.com|security.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/sources.list
sudo apt-get update && sudo apt-get dist-upgrade
```

You may need to update `/etc/apt/sources.list` in case the previous sed script above didn't change everything out automatically:
```
// EXAMPLE #1
FROM:  deb http://ports.ubuntu.com/ubuntu-ports/ impish main restricted
TO:    deb http://old-releases.ubuntu.com/ubuntu/ impish main restricted

// EXAMPLE #2
FROM:  deb-src http://mirrors.digitalocean.com/ubuntu/ hirsute-updates universe
TO:    deb http://old-releases.ubuntu.com/ubuntu/ hirsute-updates universe
```

Other solutions:
```
sudo dpkg --configure -a
sudo apt-get remove droplet-agent
sudo rm /etc/apt/sources.list.d/droplet-agent.list
sudo apt-get update
wget -qO- https://repos-droplet.digitalocean.com/install.sh | sudo bash
```