var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 8000);
	if(browser.isVisible('button=Ingresar')) {
		browser.click('button=Ingresar');
	}
  });
  
  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');
	
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });
  
  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click();
  });

  Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 30000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });
  
  When('I fill a correct email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('willigon106@gmail.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('12341234');
  });
  
  Then('I expect to be able to login', () => {
    browser.waitForVisible('button#cuenta', 5000);
  });
  
  //Register Wrong
  When('I open the register screen', () => {
    browser.waitForVisible('button=Ingresar', 10000);
	if(browser.isVisible('button=Ingresar')) {
		browser.click('button=Ingresar');
	}
  });
  
  When(/^I fill with (.*) (.*) (.*) (.*) (.*) (.*)$/ , (name, lastname, emailup, selecstudy, password, terms) => {
	var cajaSignUp = browser.element('.cajaSignUp');
	
	browser.waitForVisible('input[name="nombre"]', 5000);
	browser.isVisible('input[name="nombre"]', 5000);
	var nameInput = cajaSignUp.element('input[name="nombre"]');
    nameInput.click();
    nameInput.keys(name);
	
	var lastnInput = cajaSignUp.element('input[name="apellido"]');
    lastnInput.click();
    lastnInput.keys(lastname);
	
    var mailUpInput = cajaSignUp.element('input[name="correo"]');
    mailUpInput.click();
    mailUpInput.keys(emailup);
	
	var studyInput = cajaSignUp.element('select[name="idPrograma"]');
	studyInput.click();
    studyInput.keys(selecstudy);
	studyInput.click();
	
	var passwordUpInput = cajaSignUp.element('input[name="password"]');
    passwordUpInput.click();
    passwordUpInput.keys(password);
	
	browser.waitForVisible('input[name="acepta"]', 5000);
	browser.isVisible('input[name="acepta"]', 5000);
	var termsInput = cajaSignUp.element('input[name="acepta"]');
	if(terms == "y"){
		termsInput.click();
	}
	
  });

  When('I try to register', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click();
  });
  
  Then('I expect to sign up alert {string}', (error) => {
	if(browser.isVisible('.aviso.alert.alert-danger')) {
		browser.waitForVisible('.aviso.alert.alert-danger', 30000);
		browser.isVisible('.aviso.alert.alert-danger',5000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	}
	else if(browser.isVisible('div.has-error')){
		browser.waitForVisible('div.has-error', 7000);
		browser.isVisible('div.has-error');
	}
	else {
		browser.waitForVisible('.sweet-alert h2', 30000);
		browser.isVisible('.sweet-alert h2',5000);
		var alertText = browser.element('.sweet-alert h2').getText();
		expect(alertText).to.include(error);
		browser.click('button=Ok');
	}
	
  });
  
});