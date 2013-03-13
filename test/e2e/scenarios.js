'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/view1");
  });


  describe('main', function() {

    beforeEach(function() {
      browser().navigateTo('#/main');
    });


    it('should render main when user navigates to /main', function() {
      expect(element('[ng-view] div:first').text()).
        toMatch(/media locator/);
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser().navigateTo('#/about');
    });


    it('should render about when user navigates to /about', function() {
      expect(element('[ng-view] div:first').text()).
        toMatch(/About/);
    });

  });
});
