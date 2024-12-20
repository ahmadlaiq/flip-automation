const wdio = require("webdriverio");

async function runFlipAutomation(transactions) {
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

  try {
    // Klik Transfer
    await driver.pause(4000);
    const elementTransferXPath = await driver.$(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]'
    );
    await elementTransferXPath.waitForDisplayed({ timeout: 5000 });
    await elementTransferXPath.click();

    // Klik Banyak Rekening jika lebih dari 1 transaksi
    if (transactions.length > 1) {
      await driver.pause(4000);
      const elementBanyakRekeningXPath = await driver.$(
        '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]'
      );
      await elementBanyakRekeningXPath.waitForDisplayed({ timeout: 5000 });
      await elementBanyakRekeningXPath.click();
    }

    // Proses setiap transaksi
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      await driver.pause(4000);

      // Klik Tujuan Baru
      const elementTujuanBaruXPath = await driver.$(
        '//android.widget.TextView[@text="Tujuan Baru"]'
      );
      await elementTujuanBaruXPath.waitForDisplayed({ timeout: 5000 });
      await elementTujuanBaruXPath.click();

      // Pilih Bank
      await driver.pause(4000);
      const elementBankXPath = await driver.$(
        `//android.widget.TextView[@text="${transaction.bank}"]`
      );
      await elementBankXPath.waitForDisplayed({ timeout: 5000 });
      await elementBankXPath.click();

      // Input nomor rekening
      await driver.pause(4000);
      const elementNomorRekening = await driver.$(
        'android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TEXT_INPUT-BENEFICIARY_ACCOUNT")'
      );
      await elementNomorRekening.waitForDisplayed({ timeout: 5000 });
      await elementNomorRekening.setValue(transaction.rekening);

      // Klik Cek Rekening
      await driver.pause(4000);
      const elementCekRekening = await driver.$(
        'android=new UiSelector().resourceId("id.flip.staging:id/BENEFICIARY_ACCOUNT_SLIDER-TOUCHABLE_CHECK_ACCOUNT_NUMBER")'
      );
      await elementCekRekening.waitForDisplayed({ timeout: 5000 });
      await elementCekRekening.click();

      // Input nominal
      await driver.pause(4000);
      const elementNominal = await driver.$(
        'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-TEXT_INPUT-AMOUNT_V2")'
      );
      await elementNominal.waitForDisplayed({ timeout: 5000 });
      await elementNominal.setValue(transaction.nominal);

      // Input catatan
      await driver.pause(4000);
      const elementCatatanTransfer = await driver.$(
        'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-TEST_INPUT-REMARK")'
      );
      await elementCatatanTransfer.waitForDisplayed({ timeout: 5000 });
      await elementCatatanTransfer.setValue(transaction.catatan);

      // Klik Selesai dan Lanjutkan
      await driver.pause(4000);
      const elementSelesai = await driver.$(
        'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-BUTTON-CREATE_TRANSACTION")'
      );
      await elementSelesai.waitForDisplayed({ timeout: 5000 });
      await elementSelesai.click();

      await driver.pause(4000);
      const elementLanjutkan = await driver.$(
        'android=new UiSelector().resourceId("id.flip.staging:id/DOMESTIC_TRANSFER_FORM_SCENE-BUTTON-CREATE_TRANSACTION")'
      );
      await elementLanjutkan.waitForDisplayed({ timeout: 5000 });
      await elementLanjutkan.click();

      // Jika bukan transaksi terakhir, proses berdasarkan jumlah total transaksi
      if (i < transactions.length - 1) {
        await driver.pause(4000);

        if (transactions.length > 2) {
          // Klik "+ Tujuan Lain" untuk lebih dari 2 transaksi
          const elementTujuanLain = await driver.$(
            '//android.widget.TextView[@text="+ Tujuan Lain"]'
          );
          await elementTujuanLain.waitForDisplayed({ timeout: 5000 });
          await elementTujuanLain.click();
        }

        // Klik Rekening Bank
        await driver.pause(4000);
        const elementRekeningBank = await driver.$(
          'android=new UiSelector().resourceId("id.flip.staging:id/BOTTOM_SHEET_TRANSFER_TYPE-TOUCHABLE-DOMESTIC")'
        );
        await elementRekeningBank.waitForDisplayed({ timeout: 5000 });
        await elementRekeningBank.click();
      }
    }

    // Proses final setelah semua transaksi
    await driver.pause(4000);
    const elementLanjutkanFinal = await driver.$(
      '//android.view.ViewGroup[@content-desc="Lanjutkan"]'
    );
    await elementLanjutkanFinal.waitForDisplayed({ timeout: 5000 });
    await elementLanjutkanFinal.click();

    // Proses pembayaran
    await driver.pause(4000);
    const elementLihatSemua = await driver.$(
      '//android.widget.TextView[@resource-id="id.flip.staging:id/PAYMENT_EXPERIENCE_PAYMENT_SCENE-TEXT-CHANGE_PAYMENT_METHOD"]'
    );
    await elementLihatSemua.waitForDisplayed({ timeout: 5000 });
    await elementLihatSemua.click();

    // Pilih BRI
    await driver.pause(4000);
    const elementCariBank = await driver.$(
      '//android.widget.EditText[@resource-id="id.flip.staging:id/PAYMENT_METHOD_SLIDER-INPUT-SEARCH"]'
    );
    await elementCariBank.waitForDisplayed({ timeout: 5000 });
    await elementCariBank.click();
    await elementCariBank.setValue("BRI");

    await driver.pause(4000);
    const elementHasilBRI = await driver.$(
      '//android.view.ViewGroup[@resource-id="id.flip.staging:id/PAYMENT_METHOD_SLIDER-PRESSABLE-BANK_ITEM-BRI"]'
    );
    await elementHasilBRI.waitForDisplayed({ timeout: 5000 });
    await elementHasilBRI.click();
    await driver.pause(2000);
    await elementHasilBRI.click();

    // Klik Transfer dengan Bank Transfer
    await driver.pause(4000);
    const elementBankTransfer = await driver.$(
      '//android.view.ViewGroup[@content-desc="Transfer dengan Bank Transfer"]'
    );
    await elementBankTransfer.waitForDisplayed({ timeout: 5000 });
    await elementBankTransfer.click();

    await driver.pause(4000);
    return { success: true, message: 'Otomatisasi selesai' };

  } catch (error) {
    console.error('Error dalam otomatisasi:', error);
    return { success: false, message: error.message };
  } finally {
    await driver.deleteSession();
  }
}

module.exports = { runFlipAutomation };