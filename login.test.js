import { describe, expect, test, beforeAll, afterAll } from "@jest/globals";
const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

describe("회원가입", () => {
    let driver;
    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(
                new chrome.Options().addArguments("--headless")
            )
            .build();

        await driver.get("https://ohou.se/users/sign_in?redirect_to=%2F");
    }, 30000);

    afterAll(async () => {
        await driver.quit();
    }, 40000);

    test("정상 케이스 테스트", async () => {
        const input_id = await driver.findElements(
            By.className("_3ASDR _2wjXG css-hg1ckt e7sx0342")
        );
        input_id[0].sendKeys("ddarahakit2023@gmail.com");

        const input_pw = await driver.findElements(
            By.className("_3ASDR _2wjXG css-87d0b4 e7sx0342")
        );
        input_pw[0].sendKeys("Dkagh1234!");

        const login_btn = await driver.findElements(
            By.className("_1eWD8 _3SroY _27do9 css-1rmx362 e7sx0340")
        );
        login_btn[0].click();
        await driver.manage().setTimeouts({ implicit: 5000 });

        const profile_img = await driver.findElements(By.className("css-xnm8en"));
        expect(profile_img).not.toBe(null);
    });
});
