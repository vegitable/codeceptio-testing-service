Feature('Homepage');

Scenario('Homepage should load on "/"', I => {
  I.amOnPage(process.env.testingUrl);
  I.seeElement('.logo');
});

Scenario('Error message should load when no postcode given', I => {
  I.amOnPage(process.env.testingUrl);
  I.click('.searchBarSubmitButton');
  I.see('FILL IN YER POSTCODE!', '.alertText');
});

Scenario('Error message should flash when a postcode with no results is given', I => {
  I.amOnPage(process.env.testingUrl);
  I.fillField('.searchBarTextInput', 'testingpostcode');
  I.click('.searchBarSubmitButton');
  I.waitForElement('//*[@id="root"]/div/div[2]/div[2]/div/div/div', 10);
});

Scenario('Should route to /restaurants if results are found...', I => {
  I.amOnPage(process.env.testingUrl);
  I.fillField('.searchBarTextInput', 'E147DX');
  I.click('.searchBarSubmitButton');
  I.waitForElement('.restaurantTile', 10);
  I.seeInCurrentUrl("/restaurants");
});