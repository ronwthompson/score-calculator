const { readFileSync:read, writeFileSync: write } = require('fs')
const path = require('path')
const main = require('../main.js')
const expect = require('chai').expect

describe('main', function () {
  describe('#readScores', function () {
    it('is a function', function () {
      expect(main.readScores).to.be.a('function')
    })

    it('returns an array', function () {
      expect(main.readScores()).to.be.a('array')
    })
  })

  describe('#tallyScores', function () {
    it('is a function', function () {
      expect(main.tallyScores).to.be.a('function')
    })
  })
})
