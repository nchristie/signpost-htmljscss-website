# signpost-htmljscss-website

This is a very basic front-end designed to interact with [signpost-rails-api](https://github.com/nchristie/signpost-rails-api).

## Local development

- clone this repo
- clone https://github.com/nchristie/signpost-rails-api
- follow instructions in README of signpost-rails-api to run API locally on port 3000
- from commandline run:
 - `node server.js`
 - your front end should now be served from port 3001
- in a browser go to http://localhost:3001/
- you should now have a front end which will query the API locally, you can test it out by trying to traslate from `English` to `British Sign Language` with the word `purple`, if it's all working you'll get two videos show up.