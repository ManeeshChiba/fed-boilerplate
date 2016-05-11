#WIP
# FED Web Boilerplate
Get your website up and running quickly with [Gulp](http://gulpjs.com/), [SASS](http://sass-lang.com/) and Image optimization.

## Getting Started

* Install [node.js](http://nodejs.org/)
* Install Gulp's command line interface `npm install -g gulp`
* Install project dependencies:
 * `cd root/of/this/project/`
 * `npm install`
* Update `package.json` with your project's details

## During development
run:
`gulp dev`

Changes should be made inside `/src/`, any updates you make will be compiled/copied into `/dev/`. You should view your work by navigating to `/dev/*.html` in your browser.

## Production builds
run:
`gulp prod`

Production ready files will be compiled/copied into `/prod/`


###BrowserSync
This is an optional extra.
You will need to install browser-sync globally `npm install -g browser-sync`
This boilerplate uses browser-sync as an optional addition to kick up a dev server and sync across multiple devices and browsers.