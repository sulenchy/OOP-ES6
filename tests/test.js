import {assert} from 'chai';
import {users, student} from '../lib/main.js';
//import student from '../lib/main.js';

describe('', () => {

  describe('Handle valid input', () => {
    it("should return 'Plong' as input for 28", () => {
      assert.equal(myApp.rainDropSpeak(28), 'Plong');
    });
    
  });


  describe('Handle invalid input', () => {

    it("should return undefined as input for 'demo'", () => {
      assert.equal(myApp.rainDropSpeak('demo'), 'undefined');
    });
  });

});
