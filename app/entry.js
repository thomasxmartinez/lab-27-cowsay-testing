'use strict';

require('./base.scss');

const angular = require('angular');
const cowsayBrowser = require('cowsay-browser');

const demoApp = angular.module('demoApp', []);

demoApp.component('cowsay', {
  template: require('./cowsay.html'),
  controller: [function(){
    this.$onInit = function(){
      this.title = 'cows say what?!';
      this.userInput = '';
      this.history = [];
      this.currentCow = '';

      this.saveCow = function(){
        this.history.push(this.getCow(this.userInput));
        this.currentCow = this.history[this.history.length -1];

      };
      this.undoCow = function(){
        this.history.pop();
        this.currentCow = this.history[this.history.length -1];
      };

      this.getCow = function(text){
        return cowsayBrowser.say({text: text || 'i like turtles', f: 'ghostbusters'});
      };
    };
  }],
});
