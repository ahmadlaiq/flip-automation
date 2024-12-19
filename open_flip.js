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

  // Menggunakan locator XPath untuk elemen Transfer
  const elementTransferXPath = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]');

  await elementTransferXPath.waitForDisplayed({ timeout: 5000 });
  console.log("Elemen berdasarkan XPath Transfer ditemukan. Klik elemen Transfer...");
  await elementTransferXPath.click();

  console.log("Elemen Transfer telah diklik.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen Banyak Rekening
  const elementBanyakRekeningXPath = await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]');

  await elementBanyakRekeningXPath.waitForDisplayed({ timeout: 5000 });
  console.log("Elemen berdasarkan XPath Banyak Rekening ditemukan. Klik elemen Banyak Rekening...");
  await elementBanyakRekeningXPath.click();

  console.log("Elemen Banyak Rekening telah diklik.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen Tujuan Baru
  const elementTujuanBaruXPath = await driver.$('//android.widget.TextView[@text="Tujuan Baru"]');

  await elementTujuanBaruXPath.waitForDisplayed({ timeout: 5000 });
  console.log("Elemen berdasarkan XPath Tujuan Baru ditemukan. Klik elemen Tujuan Baru...");
  await elementTujuanBaruXPath.click();

  console.log("Elemen Tujuan Baru telah diklik.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen BRI / BRI VA
  const elementBRIXPath = await driver.$('//android.widget.TextView[@text="BRI / BRI VA"]');

  await elementBRIXPath.waitForDisplayed({ timeout: 5000 });
  console.log("Elemen berdasarkan XPath BRI / BRI VA ditemukan. Klik elemen BRI / BRI VA...");
  await elementBRIXPath.click();

  console.log("Elemen BRI / BRI VA telah diklik.");

  // Tunggu beberapa saat sebelum memasukkan nomor rekening
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk field input nomor rekening
  const elementNomorRekening = await driver.$('android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TEXT_INPUT-BENEFICIARY_ACCOUNT")');

  await elementNomorRekening.waitForDisplayed({ timeout: 5000 });
  console.log("Field nomor rekening ditemukan. Memasukkan nomor rekening...");
  await elementNomorRekening.setValue("123456789");

  console.log("Nomor rekening berhasil dimasukkan.");

  // Tunggu sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk tombol Cek Rekening
  const elementCekRekening = await driver.$('android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TOUCHABLE_CHECK_ACCOUNT_NUMBER")');

  await elementCekRekening.waitForDisplayed({ timeout: 5000 });
  console.log("Tombol Cek Rekening ditemukan. Klik tombol Cek Rekening...");
  await elementCekRekening.click();

  console.log("Tombol Cek Rekening telah diklik.");

  // Tunggu sebelum mengakhiri sesi
  await driver.pause(50000);
})();
