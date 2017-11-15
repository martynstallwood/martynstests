module.exports = {
  'HX Homepage Test' : function (browser) {
    browser
      .url('http://www.holidayextras.co.uk/holiday-insurance.html')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.btn.btn-default.btn-block.hx-btn-ultimate', 5000)
      .click('.btn.btn-default.btn-block.hx-btn-ultimate')
      .pause(10000)
      .setValue('[data-hxtrack-name="passenger-first-name-0"]', 'TEST')
      .pause(5000)
      .assert.value('[data-hxtrack-name="passenger-first-name-0"]', 'TEST')
      .pause(5000)
      .end();
  }
};
