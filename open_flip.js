const wdio = require("webdriverio");

(async () => {
  const opts = {
    path: "/",
    port: 4723,
    capabilities: {
      platformName: "Android",
      "appium:deviceName": "Android",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "id.flip",
      "appium:appActivity": "id.flip.MainActivity",
      "appium:noReset": true,
      "appium:forceAppLaunch": true,
    },
  };

  const driver = await wdio.remote(opts);

  console.log("Aplikasi Flip berhasil dibuka!");

  // Tunggu beberapa saat agar elemen dimuat
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen Transfer
  const elementTransferXPath = await driver.$(
    '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]'
  );

  await elementTransferXPath.waitForDisplayed({ timeout: 5000 });
  console.log(
    "Elemen berdasarkan XPath Transfer ditemukan. Klik elemen Transfer..."
  );
  await elementTransferXPath.click();

  console.log("Elemen Transfer telah diklik.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen Banyak Rekening
  const elementBanyakRekeningXPath = await driver.$(
    '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]'
  );

  await elementBanyakRekeningXPath.waitForDisplayed({ timeout: 5000 });
  console.log(
    "Elemen berdasarkan XPath Banyak Rekening ditemukan. Klik elemen Banyak Rekening..."
  );
  await elementBanyakRekeningXPath.click();

  console.log("Elemen Banyak Rekening telah diklik.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen Tujuan Baru
  const elementTujuanBaruXPath = await driver.$(
    '//android.widget.TextView[@text="Tujuan Baru"]'
  );

  await elementTujuanBaruXPath.waitForDisplayed({ timeout: 5000 });
  console.log(
    "Elemen berdasarkan XPath Tujuan Baru ditemukan. Klik elemen Tujuan Baru..."
  );
  await elementTujuanBaruXPath.click();

  console.log("Elemen Tujuan Baru telah diklik.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator XPath untuk elemen BRI / BRI VA
  const elementBRIXPath = await driver.$(
    '//android.widget.TextView[@text="BRI / BRI VA"]'
  );

  await elementBRIXPath.waitForDisplayed({ timeout: 5000 });
  console.log(
    "Elemen berdasarkan XPath BRI / BRI VA ditemukan. Klik elemen BRI / BRI VA..."
  );
  await elementBRIXPath.click();

  console.log("Elemen BRI / BRI VA telah diklik.");

  // Tunggu beberapa saat sebelum memasukkan nomor rekening
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk field input nomor rekening
  const elementNomorRekening = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TEXT_INPUT-BENEFICIARY_ACCOUNT")'
  );

  await elementNomorRekening.waitForDisplayed({ timeout: 5000 });
  console.log("Field nomor rekening ditemukan. Memasukkan nomor rekening...");
  await elementNomorRekening.setValue("014201039623502");

  console.log("Nomor rekening berhasil dimasukkan.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk tombol Cek Rekening
  const elementCekRekening = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TOUCHABLE_CHECK_ACCOUNT_NUMBER")'
  );

  await elementCekRekening.waitForDisplayed({ timeout: 5000 });
  console.log("Tombol Cek Rekening ditemukan. Klik tombol Cek Rekening...");
  await elementCekRekening.click();

  console.log("Tombol Cek Rekening telah diklik.");

  // Tunggu beberapa saat sebelum memasukkan nominal
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk field input nominal
  const elementNominal = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-TEXT_INPUT-AMOUNT_V2")'
  );

  await elementNominal.waitForDisplayed({ timeout: 5000 });
  console.log("Field nominal ditemukan. Memasukkan nominal...");
  await elementNominal.setValue("100000");

  console.log("Nominal berhasil dimasukkan.");

  // Tunggu beberapa saat sebelum langkah berikutnya
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk field catatan transfer
  const elementCatatanTransfer = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-TEST_INPUT-REMARK")'
  );

  await elementCatatanTransfer.waitForDisplayed({ timeout: 5000 });
  console.log(
    "Field catatan transfer ditemukan. Memasukkan catatan transfer..."
  );
  await elementCatatanTransfer.setValue("Bayar makan siang");

  console.log("Catatan transfer berhasil dimasukkan.");

  // Tunggu sebelum klik tombol Lanjutkan
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk tombol Lanjutkan
  const elementSelesai = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-BUTTON-CREATE_TRANSACTION")'
  );

  await elementSelesai.waitForDisplayed({ timeout: 5000 });
  console.log("Tombol Selesai ditemukan. Klik tombol Lanjutkan...");
  await elementSelesai.click();

  console.log("Tombol Selesai telah diklik.");

  // Tunggu sebelum klik tombol Lanjutkan
  await driver.pause(4000);

  // Menggunakan locator resource-id untuk tombol Lanjutkan
  const elementLanjutkan = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-BUTTON-CREATE_TRANSACTION")'
  );

  await elementLanjutkan.waitForDisplayed({ timeout: 5000 });
  console.log("Tombol Lanjutkan ditemukan. Klik tombol Lanjutkan...");
  await elementLanjutkan.click();

  console.log("Tombol Lanjutkan telah diklik.");

  // Tunggu sebelum klik tombol Rekening Bank
  await driver.pause(5000);

  // Menggunakan locator resource-id untuk tombol Rekening Bank
  const elementRekeningBank = await driver.$(
    'android=new UiSelector().resourceId("id.flip.staging:id/BOTTOM_SHEET_TRANSFER_TYPE-TOUCHABLE-DOMESTIC")'
  );

  await elementRekeningBank.waitForDisplayed({ timeout: 5000 });
  console.log("Tombol Rekening Bank ditemukan. Klik tombol Rekening Bank...");
  await elementRekeningBank.click();

  console.log("Tombol Rekening Bank telah diklik.");

  // // Tunggu sebelum klik tombol Tujuan Baru untuk transfer kedua
  // await driver.pause(4000);

  // // Menggunakan locator XPath untuk elemen Tujuan Baru (transfer kedua)
  // const elementTujuanBaruXPath2 = await driver.$('//android.widget.TextView[@text="Tujuan Baru"]');

  // await elementTujuanBaruXPath2.waitForDisplayed({ timeout: 5000 });
  // console.log("Elemen berdasarkan XPath Tujuan Baru (transfer kedua) ditemukan. Klik elemen Tujuan Baru...");
  // await elementTujuanBaruXPath2.click();

  // console.log("Elemen Tujuan Baru (transfer kedua) telah diklik.");

  // // Tunggu beberapa saat sebelum langkah berikutnya
  // await driver.pause(4000);

  // // Menggunakan locator XPath untuk elemen Seabank/Bank BKE
  // const elementSeabankXPath = await driver.$('//android.widget.TextView[@text="Seabank/Bank BKE"]');

  // await elementSeabankXPath.waitForDisplayed({ timeout: 5000 });
  // console.log("Elemen berdasarkan XPath Seabank/Bank BKE ditemukan. Klik elemen Seabank/Bank BKE...");
  // await elementSeabankXPath.click();

  // console.log("Elemen Seabank/Bank BKE telah diklik.");

  // // Tunggu beberapa saat sebelum memasukkan nomor rekening
  // await driver.pause(4000);

  // // Menggunakan locator resource-id untuk field input nomor rekening (transfer kedua)
  // const elementNomorRekening2 = await driver.$('android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TEXT_INPUT-BENEFICIARY_ACCOUNT")');

  // await elementNomorRekening2.waitForDisplayed({ timeout: 5000 });
  // console.log("Field nomor rekening (transfer kedua) ditemukan. Memasukkan nomor rekening...");
  // await elementNomorRekening2.setValue("014201039623502");

  // console.log("Nomor rekening (transfer kedua) berhasil dimasukkan.");

  // // Tunggu beberapa saat sebelum langkah berikutnya
  // await driver.pause(4000);

  // // Menggunakan locator resource-id untuk tombol Cek Rekening (transfer kedua)
  // const elementCekRekening2 = await driver.$('android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TOUCHABLE_CHECK_ACCOUNT_NUMBER")');

  // await elementCekRekening2.waitForDisplayed({ timeout: 5000 });
  // console.log("Tombol Cek Rekening (transfer kedua) ditemukan. Klik tombol Cek Rekening...");
  // await elementCekRekening2.click();

  // console.log("Tombol Cek Rekening (transfer kedua) telah diklik.");

  // // Tunggu beberapa saat sebelum memasukkan nominal
  // await driver.pause(4000);

  // // Menggunakan locator resource-id untuk field input nominal (transfer kedua)
  // const elementNominal2 = await driver.$('android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-TEXT_INPUT-AMOUNT_V2")');

  // await elementNominal2.waitForDisplayed({ timeout: 5000 });
  // console.log("Field nominal (transfer kedua) ditemukan. Memasukkan nominal...");
  // await elementNominal2.setValue("100000");

  // console.log("Nominal (transfer kedua) berhasil dimasukkan.");

  // // Tunggu beberapa saat sebelum langkah berikutnya
  // await driver.pause(4000);

  // // Menggunakan locator resource-id untuk field catatan transfer (transfer kedua)
  // const elementCatatanTransfer2 = await driver.$('android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-TEST_INPUT-REMARK")');

  // await elementCatatanTransfer2.waitForDisplayed({ timeout: 5000 });
  // console.log("Field catatan transfer (transfer kedua) ditemukan. Memasukkan catatan transfer...");
  // await elementCatatanTransfer2.setValue("Bayar makan siang 2");

  // console.log("Catatan transfer (transfer kedua) berhasil dimasukkan.");

  // Tunggu sebelum mengakhiri sesi
  await driver.pause(5000);

  // Opsional: Tambahkan driver.deleteSession() jika ingin menutup sesi setelah selesai
  // await driver.deleteSession();
})();
