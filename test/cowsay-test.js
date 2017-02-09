'use strict';

require('angular-mocks');

const expect = require('chai').expect;
const cowsayBrowser = require('cowsay-browser');

describe('testing cowsay components controller', function(){
  beforeEach((done) => {
    angular.mock.module('demoApp');
    angular.mock.inject(($componentController) => {
      this.$componentController = $componentController;
      done();
    });
  });

  beforeEach((done) => {
    this.cowsayCtrl = this.$componentController('cowsay');
    this.cowsayCtrl.$onInit();
    done();
  });
  describe('testing initial state', () => {
    it('should initialize methods and properties', (done) => {
      expect(this.cowsayCtrl.title).to.equal('cows say what?!');
      expect(this.cowsayCtrl.userInput).to.equal('');
      expect(Array.isArray(this.cowsayCtrl.history)).to.equal(true);
      expect(this.cowsayCtrl.history.length).to.equal(0);
      expect(typeof (this.cowsayCtrl.getCow)).to.equal('function');
      done();
    });
  });
  describe('testing getCow', () => {
    it('should return a cow that says "i like turtles"', (done) => {
      let result = this.cowsayCtrl.getCow();
      expect(result).to.equal(cowsayBrowser.say({text: 'i like turtles', f: 'ghostbusters'}));
      done();
    });
    it('should return a cow that says "i like turtles"', (done) => {
      this.cowsayCtrl.userInput = 'hello';
      let result = this.cowsayCtrl.getCow(this.cowsayCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'hello', f: 'ghostbusters'}));
      done();
    });
  });
});
