//var chai = require('chai')
var expect = chai.expect


const hello = 'Hello,'
const world = ' World!'
const joinedString = hello + world

const myFunc = () => {
	console.log('myFunc ran, and it is an arrow function stored in a const')
}

describe('First Test', () => {
	it('browser test works', (done) => {
		myFunc()

		expect(joinedString).to.equal('Hello, World!')
		done()
	})
})