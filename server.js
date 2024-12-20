// server.js
const express = require('express');
const path = require('path');
const { runFlipAutomation } = require('./flip');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk menerima data form
app.post('/submit', async (req, res) => {
  try {
    const { bank_pengirim, nama, rekening, nominal, bank_tujuan, catatan } = req.body;
    
    // Validasi sederhana
    if (!bank_pengirim || !nama || !rekening || !nominal || !bank_tujuan || !catatan) {
      return res.status(400).json({
        success: false,
        message: 'Semua field harus diisi'
      });
    }

    // Format data untuk otomatisasi
    const transactions = nama.map((_, index) => ({
      nama: nama[index],
      rekening: rekening[index],
      nominal: nominal[index].toString(), // Pastikan nominal dalam bentuk string
      bank: bank_tujuan[index],
      catatan: catatan[index]
    }));

    console.log('Memulai otomatisasi dengan data:', transactions);
    console.log('Bank Pengirim:', bank_pengirim);
    
    const result = await runFlipAutomation(transactions);
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat memproses transfer'
    });
  }
});

// Jalankan server
const PORT = 7001;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});