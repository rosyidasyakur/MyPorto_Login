# MyLogin coy

Sistem autentikasi pengguna berbasis web dengan fitur registrasi dan login yang aman.

## Tampilan

- Halaman Login
- Halaman Registrasi
- Halaman Dashboard setelah login berhasil

## Teknologi yang Digunakan

- **Node.js** & **Express.js** — Backend server
- **PostgreSQL** — Database penyimpanan user
- **bcrypt** — Enkripsi password
- **dotenv** — Menyembunyikan kredensial sensitif
- **HTML & CSS** — Frontend

## Fitur

- Registrasi akun baru dengan validasi username unik
- Login dengan pengecekan username dan password
- Password dienkripsi menggunakan bcrypt sebelum disimpan
- Redirect otomatis setelah registrasi dan login berhasil

## Cara Menjalankan

1. Clone repository ini
   ```bash
   git clone https://github.com/rosyidasyakur/MyPorto_Login.git
   ```

2. Masuk ke folder data
   ```bash
   cd MyPorto_Login/data
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Buat file `.env` di folder `data/`
   ```
   DB_PASSWORD=password_postgresql_kamu
   ```

5. Jalankan server
   ```bash
   npm run server
   ```

6. Buka browser dan akses `http://localhost:3000`

## Catatan

File `.env` tidak ikut di-upload ke GitHub demi keamanan. Pastikan kamu membuat file `.env` sendiri sebelum menjalankan project ini.
Project ini dibuat sebagai bagian dari proses belajar 
pengembangan web. Masih dalam tahap pengembangan dan 
akan terus ditingkatkan.
