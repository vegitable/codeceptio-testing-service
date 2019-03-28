Feature('Homepage');

Scenario('SideBar should open on click of burger button.', I => {
  I.amOnPage('http://reactuiservice.eu-west-2.elasticbeanstalk.com/restaurants');
  I.waitForElement('.logo', 10);
  I.click('.bm-burger-button');
  I.waitForElement('.bm-item-list')
  I.see('HOME', '.bm-item-list');
});