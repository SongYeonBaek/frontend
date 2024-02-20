const {Builder, By} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
    await driver.get('https://ohou.se/users/sign_in?redirect_to=%2F');

    const input_email = driver.findElement(By.className('_3ASDR _2wjXG css-hg1ckt e7sx0342'));
    input_email.sendKeys('songyeon0607@gmail.com');

    const input_pw = await driver.findElement(By.className('_3ASDR _2wjXG css-87d0b4 e7sx0342'));
    input_pw.sendKeys('135790Mjk!');

    const login_btn = await driver.findElement(By.className('_1eWD8 _3SroY _27do9 css-1rmx362 e7sx0340'));
    login_btn.click();

    await sleep(5000);
    // await driver.get('https://ohou.se/users/sign_in?redirect_to=%2F');
    const hotdeal_btn = await driver.findElement(By.className('e1387oiq1 css-h8ff20'));
    hotdeal_btn.click();


    const product_detail =  driver.findElement(By.className('e19k6sjk0 css-ylurzg e2x1i8f0'));
    product_detail.click();

})();

// sleep 함수 정의
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}