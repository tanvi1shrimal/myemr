# MY EMR Marketing Site #

This README would document whatever steps are necessary to get your application up and running.

### Summary ###

* This repo contains front end files for the MY EMR Marketing Site.
* This project uses the SCSS-port of Bootstrap with modifications to suit the design
* SASS for CSS pre-processing
* BEM(http://getbem.com/) as naming convention for style rules along with the bootstrap's naming convention to modify Bootstrap specific styles.
* HarpJs(https://harpjs.com/) is used as a static web server for development. Feel free to use prefered local server.
* GulpJs(http://gulpjs.com/) is used to build distribution files.

### Getting set up ###

* Install gulp globally: $ npm install --global gulp-cli
* Install harp globally: $ npm install -g harp
* clone the repo and run: gulp

### Development guidelines ###

* cd into src project, open up cmd/terminal and run: harp server or run gulp watch from the root folder itself.
* Now you can make changes to scss or js files directly and check updated changes on the browser