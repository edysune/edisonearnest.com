# EdisonEarnestSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Setup and Versions used in project:
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g @angular/cli

node --version
v14.18.1

npm --version
6.14.15

ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.11
Node: 14.18.1
Package Manager: npm 6.14.15
OS: linux x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1202.11 (cli-only)
@angular-devkit/core         12.2.11 (cli-only)
@angular-devkit/schematics   12.2.11 (cli-only)
@schematics/angular          12.2.11 (cli-only)


## Removing Node/Angular
sudo apt-get remove -y nodejs

sudo apt-get remove nodejs npm node
sudo apt-get purge nodejs

sudo rm -rf /usr/local/bin/npm 
sudo rm -rf /usr/local/share/man/man1/node* 
sudo rm -rf /usr/local/lib/dtrace/node.d 
sudo rm -rf ~/.npm 
sudo rm -rf ~/.node-gyp 
sudo rm -rf /opt/local/bin/node 
sudo rm -rf opt/local/include/node 
sudo rm -rf /opt/local/lib/node_modules  

sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node*


## Libraries
https://getbootstrap.com
https://ng-bootstrap.github.io/ <-- ???

## NGINX Configurations for https/SSL

Steps may involve creating a CSR using openssl, then using that to create a certificate from your provider. KEEP the key generated when CSR is created, and then keep the CRT that is generated from your provider. Both will need to be put onto your server.

Configurations stored in the ngingx_config file allow redirection of http to https. Once configurations are placed, you may need to check some of the hardcoded values and paths.

Always edit in /etc/nginx/sites-available/<configuration>, not sites-enabled.

After editing use sudo nginx -t to validate configurations, and then sudo nginx -s reload OR sudo systemctl reload nginx to refresh site.

Problems: check the error logs in /var/log/nginx/error.log if you think there might be errors.

It might also be a good idea to give permissions to key and crt files using chmod 700.
