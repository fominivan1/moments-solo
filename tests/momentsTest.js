let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.momentsPage()
        manager.navigate()
            .waitForElementVisible('@homepageLogo', 5000)
    },
    after: browser => {
        browser.end()
    },
    'It can create an account': browser => {
        manager
            .click('@signUp')
        browser.pause(500)
        manager
            .setValue('@usernameInput', 'barackobama')
            .setValue('@firstnameField', 'barack')
            .setValue('@lastnameField', 'obama')
            .setValue('@passwordInput', 'password12')
            .setValue('@emailField', 'fominivan@yahoo.com')
            .setValue('@phoneField', '9162679483')
            .setValue('@locationField', 'new york')
            .click('option[value="Male"]')
            .setValue('@textField', 'I am a simple gentleman that also happens to be the 44th president of the united states.')
            .setValue('@photoUpload', require('path').resolve('/Users/ivanfomin/Desktop/Resized_LRM_EXPORT_20180814_172032.jpeg')) 
        browser.pause(5000)
        manager
            .click('@registerButton')
    },
    'It can log in and log out': browser => {
        manager
            .click('@logIn')
        browser.pause(500)
        manager
            .setValue('@usernameInput', 'mrbean17')
            .setValue('@passwordInput', 'password12')
            .click('@loginButton')
            .assert.elementPresent('h1[class="user-greeting"]')
            .pause(1000)
            .click('@logoutButton')
            .pause(500)
            .click('@logoutButton')
    }
}