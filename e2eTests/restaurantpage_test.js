Feature('Homepage');

Scenario('Should be routed to home page if there is not restaurant data', I => {
  I.amOnPage(process.env.testingUrl);
  I.waitForElement('.logo', 10);
  I.dontSeeInCurrentUrl("/restaurants");
});
