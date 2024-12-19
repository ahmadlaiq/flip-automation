const wdio = require('webdriverio');

(async () => {
  const opts = {
    path: '/',
    port: 4723,
    capabilities: {
      platformName: "Android",
      "appium:deviceName": "Android",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "id.flip",
      "appium:appActivity": "id.flip.MainActivity",
      "appium:noReset": true,
      "appium:forceAppLaunch": true
    }
  };

  const driver = await wdio.remote(opts);

  console.log("Aplikasi Flip berhasil dibuka!");

  // Tunggu beberapa saat agar elemen dimuat
  await driver.pause(4000);

  // Menggunakan locator XPath
  const elementByXPath = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]');

  await elementByXPath.waitForDisplayed({ timeout: 5000 });
  console.log("Elemen berdasarkan XPath tersebut ditemukan. Klik elemen...");
  await elementByXPath.click();

  console.log("Elemen telah diklik.");

  await driver.pause(50000);
})();
