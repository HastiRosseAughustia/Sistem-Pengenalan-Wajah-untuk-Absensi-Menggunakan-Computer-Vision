# Sistem Pengenalan Wajah untuk Absensi Menggunakan Computer Vision

## Deskripsi Proyek

Proyek ini bertujuan untuk mengembangkan sistem absensi otomatis menggunakan teknologi pengenalan wajah berbasis computer vision. Sistem ini memungkinkan absensi yang efisien dan akurat dengan memanfaatkan teknologi pengenalan wajah untuk memverifikasi kehadiran pengguna.

## Struktur Direktori

Berikut adalah struktur direktori proyek ini:

face-recognition-attendance-system/
├── backend/
│ ├── config/
│ │ ├── db.js # Konfigurasi database
│ │ └── keys.js # Kunci konfigurasi
│ ├── controllers/
│ │ ├── faceController.js # Logika pengelolaan data wajah
│ │ ├── userController.js # Logika pengelolaan pengguna
│ │ └── attendanceController.js # Logika pengelolaan absensi
│ ├── models/
│ │ ├── Face.js # Model untuk data wajah
│ │ ├── User.js # Model untuk data pengguna
│ │ └── Attendance.js # Model untuk data absensi
│ ├── routes/
│ │ ├── faceRoutes.js # Rute untuk operasi wajah
│ │ ├── userRoutes.js # Rute untuk operasi pengguna
│ │ └── attendanceRoutes.js # Rute untuk operasi absensi
│ ├── middlewares/
│ │ ├── authMiddleware.js # Middleware autentikasi
│ │ └── errorMiddleware.js # Middleware penanganan error
│ ├── utils/
│ │ └── helpers.js # Fungsi utilitas
│ ├── .env # File konfigurasi lingkungan
│ ├── server.js # Entry point server
│ └── package.json # Daftar dependensi
│
├── frontend/
│ ├── public/
│ │ ├── index.html # Halaman utama
│ │ └── manifest.json # Manifest aplikasi
│ ├── src/
│ │ ├── assets/
│ │ │ └── images/ # Gambar aplikasi
│ │ ├── components/
│ │ │ ├── FaceCapture.js # Komponen untuk menangkap wajah
│ │ │ ├── AttendanceList.js # Komponen daftar absensi
│ │ │ ├── UserList.js # Komponen daftar pengguna
│ │ │ └── Navbar.js # Komponen navbar
│ │ ├── pages/
│ │ │ ├── HomePage.js # Halaman beranda
│ │ │ ├── CapturePage.js # Halaman menangkap wajah
│ │ │ ├── AttendancePage.js # Halaman absensi
│ │ │ ├── UserPage.js # Halaman pengguna
│ │ │ └── NotFoundPage.js # Halaman 404
│ │ ├── services/
│ │ │ ├── faceService.js # Layanan untuk operasi wajah
│ │ │ ├── userService.js # Layanan untuk operasi pengguna
│ │ │ └── attendanceService.js # Layanan untuk operasi absensi
│ │ ├── App.js # Komponen utama aplikasi
│ │ ├── index.js # Entry point aplikasi
│ │ ├── routes.js # Rute aplikasi
│ │ ├── store/
│ │ │ ├── actions/
│ │ │ │ ├── faceActions.js # Aksi untuk wajah
│ │ │ │ ├── userActions.js # Aksi untuk pengguna
│ │ │ │ └── attendanceActions.js # Aksi untuk absensi
│ │ │ ├── reducers/
│ │ │ │ ├── faceReducer.js # Reducer untuk wajah
│ │ │ │ ├── userReducer.js # Reducer untuk pengguna
│ │ │ │ └── attendanceReducer.js # Reducer untuk absensi
│ │ │ └── store.js # Konfigurasi store Redux
│ │ ├── styles/
│ │ │ └── main.css # Gaya aplikasi
│ │ ├── .env # File konfigurasi lingkungan
│ │ └── package.json # Daftar dependensi
│
├── model/
│ ├── train.py # Skrip pelatihan model
│ ├── predict.py # Skrip prediksi dengan model
│ ├── model.h5 # Model yang telah dilatih
│ └── requirements.txt # Daftar dependensi untuk model
│
├── README.md # Dokumen ini
├── .gitignore # Daftar file dan direktori yang diabaikan Git
└── LICENSE # Lisensi proyek
