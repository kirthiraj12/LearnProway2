
describe('To Test the way2 learn website', function() {

 it('should be able to load the page', function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    element(by.id('username')).sendKeys("angular");
    element(by.id('password')).sendKeys("password");
    element(by.id('formly_1_input_username_0')).sendKeys("lskdhgfsdf")
    //element(by.css('#.btn btn-danger')).click();
    element(by.buttonText('Login')).click();
  });
});
