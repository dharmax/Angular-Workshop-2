'use strict';

/* jasmine specs for controllers go here */

describe('MyController', function(){
  var myController;

  beforeEach(function(){
    myController = new MyController();
  });


  it('should return 1', function() {
    return myController.search().length();
    //spec body
  });
});
