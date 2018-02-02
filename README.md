# ES6 Module dev, test, build
### With Poi, Mocha, and Chai.

run `npm i`


#### To run browser tests
`npm start`, open your browser, and go to localhost:4000 to see a browser test with Mocha and Chai.


#### To run node tests
`npm run test:node`


`npm run build` will currently output a UMD module. If you want to build AMD or CJS, then that needs to be changed in poi.config.js. 



Currently it's a mess, so TODOs:

[ ] You have to build tests with `Poi test`
[ ] Imports and requires are being funky
[ ] Watch: True
[ ] Get npm scripts fully working
[ ] Remove external modules