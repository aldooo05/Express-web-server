// Mengimpor modul Express.js
const express = require("express");
// Membuat aplikasi Express
const app = express();
// Menetapkan port server
const port = 3000;

// Menggunakan middleware untuk membaca data dari body permintaan dalam format JSON dan formulir yang dikodekan
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menghandle permintaan GET ke path "/"
app.get("/", (req, res) => {
  // Mengirimkan respons dengan pesan ke client
  res.send("Hallo selamat datang di halaman utama");
});

// Menghandle permintaan GET ke path "/holla"
app.get("/holla", (req, res) => {
  // Mencetak parameter URL yang diterima dari permintaan ke konsol
  console.log({ urlParam: req.query });
  // Mengirimkan respons dengan pesan ke client
  res.send("Hello Ini halaman holla");
});

// Menghandle permintaan POST ke path "/login"
app.post("/login", (req, res) => {
  // Mencetak data dari body permintaan ke konsol
  console.log({ requestFromOutside: req.body });
  // Mengambil nilai dari properti "username" dalam body permintaan
  const username = req.body.username;
  // Mengirimkan respons ke client
  res.send("Masuk pa haji");
});

// Menghandle permintaan PUT ke path "/username"
app.put("/username", (req, res) => {
  // Mencetak data dari body permintaan ke konsol
  console.log({ updateData: req.body });
  // Mengirimkan respons ke client
  res.send("Update data berhasil");
});

// Mengaktifkan server untuk mendengarkan permintaan pada port yang telah ditetapkan
app.listen(port, () => {
  // Mencetak pesan ke konsol ketika server telah dimulai
  console.log(`Example app listening on port ${port}`);
});
