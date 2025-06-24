document.addEventListener('DOMContentLoaded', () => {
    // Select all frames
    const frames = document.querySelectorAll('.frame');
    const frame1 = document.getElementById('frame1');
    const frame2 = document.getElementById('frame2');
    const frame7 = document.getElementById('frame7');
    const frame3 = document.getElementById('frame3');
    const frameLogin = document.getElementById('frameLogin');
    const frameRegister = document.getElementById('frameRegister');
    const frameMain = document.getElementById('frameMain');

    // Detail frames for services
    const frame4 = document.getElementById('frame4');
    const frame5 = document.getElementById('frame5');
    const frame6 = document.getElementById('frame6');

    // Function to hide all frames with transition properties
    const hideAllFrames = () => {
        frames.forEach(frame => {
            frame.style.transform = 'translateX(100%)'; // Move off-screen right
            frame.style.opacity = '0'; // Make transparent
            frame.style.pointerEvents = 'none'; // Disable interactions
            // Use setTimeout to set display: none after transition
            // This prevents content from being accessible while off-screen
            setTimeout(() => {
                frame.style.display = 'none';
            }, 500); // Must match CSS transition duration
        });
    };

    // Function to show a specific frame with transition
    const showFrame = (frameToShow) => {
        // First, hide all frames cleanly
        hideAllFrames();

        // Then, immediately show the target frame (display: flex),
        // but keep it off-screen and transparent initially.
        frameToShow.style.display = 'flex';
        // Force a reflow/repaint to ensure the browser registers the
        // initial transform before applying the final one,
        // allowing the transition to occur.
        frameToShow.offsetWidth;

        // Animate it into view
        frameToShow.style.transform = 'translateX(0)';
        frameToShow.style.opacity = '1';
        frameToShow.style.pointerEvents = 'auto'; // Enable interactions
        frameToShow.scrollTop = 0; // Scroll to top when showing a frame
    };

    // --- Initial Splash Screen Sequence ---
    // Start by ensuring only Frame 1 is visible initially
    // Then transition to Frame 2, then Frame 7, then Frame 3 (Navigation)
    // All other frames are initially set to display: none in HTML.

    setTimeout(() => {
        showFrame(frame2); // After 1 second, transition to Frame 2
        setTimeout(() => {
            showFrame(frame7); // After another 1 second, transition to Frame 7
            setTimeout(() => {
                showFrame(frame3); // After another 1 second, transition to Frame 3 (Navigation)
            }, 1000);
        }, 1000);
    }, 1000); // Start the sequence after 1 second of Frame 1

    // --- Global Navigation Functions (called from HTML onclick) ---
    window.showLogin = () => {
        showFrame(frameLogin);
    };

    window.showRegister = () => {
        showFrame(frameRegister);
    };

    window.showMainContent = () => {
        showFrame(frameMain);
    };

    // --- Service Card Detail Navigation ---
    window.showDetailFrame = (frameId) => {
        const targetFrame = document.getElementById(frameId);
        if (targetFrame) {
            showFrame(targetFrame);
        }
    };
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');

    // Dapatkan referensi ke tombol "Masuk" di halaman welcome
    const masukBtn = document.getElementById('masukBtn');

    // Dapatkan referensi ke input password dan toggle eye icon
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        // Dapatkan semua elemen dengan class 'page'
        const pages = document.querySelectorAll('.page');
        // Iterasi melalui setiap halaman dan hapus class 'active' (sembunyikan)
        pages.forEach(page => {
            page.classList.remove('active');
        });
        // Tambahkan class 'active' ke halaman yang ingin ditampilkan
        pageToShow.classList.add('active');
    };

    // Event listener untuk tombol "Masuk"
    // Ketika tombol 'masukBtn' diklik, panggil fungsi showPage() untuk menampilkan 'loginPage'
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk toggle visibility password (ikon mata)
    if (passwordToggle && passwordField) {
        passwordToggle.addEventListener('click', () => {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                // Anda bisa mengganti gambar ikon di sini jika Anda memiliki ikon mata terbuka
                // passwordToggle.src = 'eye-open-icon.png';
            } else {
                passwordField.type = 'password';
                // Anda bisa mengganti gambar ikon di sini jika Anda memiliki ikon mata tertutup
                // passwordToggle.src = 'eye-icon.png';
            }
        });
    }

    // Pastikan halaman welcome muncul pertama kali saat halaman dimuat
    // Ini penting agar halaman login tidak langsung terlihat saat pertama kali dibuka
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage'); // Halaman Register BARU

    // Dapatkan referensi ke tombol-tombol navigasi
    const masukBtn = document.getElementById('masukBtn'); // Tombol "Masuk" di halaman welcome
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn'); // Tombol "Daftar" di halaman welcome BARU
    const signupLoginBtn = document.getElementById('signupLoginBtn'); // Tombol "Signup" di halaman login BARU
    const closeRegisterBtn = document.getElementById('closeRegisterBtn'); // Tombol 'X' di halaman register BARU

    // Dapatkan referensi ke input password dan toggle eye icon (untuk login page)
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle'); // Spesifik untuk halaman login

    // Dapatkan referensi ke input password dan toggle eye icon (untuk register page)
    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle'); // Menggunakan sibling selector
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle'); // Menggunakan sibling selector

    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link untuk melompat atau reload halaman
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });


    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
                // Update icon jika Anda punya
                // loginPasswordToggle.src = 'eye-open-icon.png';
            } else {
                loginPasswordField.type = 'password';
                // Update icon jika Anda punya
                // loginPasswordToggle.src = 'eye-icon.png';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const dashboardPage = document.getElementById('dashboardPage'); // Halaman Dashboard BARU

    // Dapatkan referensi ke tombol-tombol navigasi
    const masukBtn = document.getElementById('masukBtn'); // Tombol "Masuk" di halaman welcome
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn'); // Tombol "Daftar" di halaman welcome
    const signupLoginBtn = document.getElementById('signupLoginBtn'); // Tombol "Signup" di halaman login
    const closeRegisterBtn = document.getElementById('closeRegisterBtn'); // Tombol 'X' di halaman register

    const loginSubmitBtn = document.getElementById('loginSubmitBtn'); // Tombol "Login" di halaman login BARU
    const registerSubmitBtn = document.getElementById('registerSubmitBtn'); // Tombol "Register" di halaman register BARU

    // Dapatkan referensi ke input password dan toggle eye icon (untuk login page)
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    // Dapatkan referensi ke input password dan toggle eye icon (untuk register page)
    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');

    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link untuk melompat atau reload halaman
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (BARU: dari login ke dashboard)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah form submit default (reload halaman)
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(dashboardPage);
    });

    // Event listener untuk tombol "Register" di halaman register (BARU: dari register ke dashboard)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah form submit default (reload halaman)
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(dashboardPage);
    });


    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const dashboardPage = document.getElementById('dashboardPage'); // Halaman Dashboard (kini scrollable)

    // Dapatkan referensi ke tombol-tombol navigasi
    const masukBtn = document.getElementById('masukBtn');
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn');
    const signupLoginBtn = document.getElementById('signupLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');

    // Dapatkan referensi ke input password dan toggle eye icon (untuk login page)
    const loginPasswordField = document.getElementById('password');
    // Selector lebih spesifik untuk password toggle di login page
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    // Dapatkan referensi ke input password dan toggle eye icon (untuk register page)
    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top when a new page becomes active
        pageToShow.scrollTop = 0;
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (dari login ke dashboard/scrollable content)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(dashboardPage);
    });

    // Event listener untuk tombol "Register" di halaman register (dari register ke dashboard/scrollable content)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(dashboardPage);
    });


    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const mainContentPage = document.getElementById('mainContentPage'); // Halaman konten utama yang scrollable

    // Dapatkan referensi ke tombol-tombol navigasi
    const masukBtn = document.getElementById('masukBtn');
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn');
    const signupLoginBtn = document.getElementById('signupLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');

    // Dapatkan referensi ke input password dan toggle eye icon
    // Selector lebih spesifik untuk mencegah konflik ID
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToBottomWhy = document.getElementById('scrollToBottomWhy');
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage) {
            scrollableContentWrapper.scrollTop = 0;
        }
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah link untuk melompat atau reload halaman
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (dari login ke mainContentPage)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah form submit default (reload halaman)
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Event listener untuk tombol "Register" di halaman register (dari register ke mainContentPage)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah form submit default (reload halaman)
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });


    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                // Gulir ke awal bagian AI-Powered Roleplays
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        if (scrollToBottomWhy) {
            scrollToBottomWhy.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight, // Gulir ke paling bawah
                    behavior: 'smooth'
                });
            });
        }
    }


    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const mainContentPage = document.getElementById('mainContentPage'); // Halaman konten utama yang scrollable

    // Dapatkan referensi ke tombol-tombol navigasi
    const masukBtn = document.getElementById('masukBtn');
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn');
    const signupLoginBtn = document.getElementById('signupLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');

    // Dapatkan referensi ke input password dan toggle eye icon
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience'); // Panah bawah dari Why Speak Tech?
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience'); // Panah atas dari Virtual Experience
    const scrollToBottomVirtualExperience = document.getElementById('scrollToBottomVirtualExperience'); // Panah bawah dari Virtual Experience


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (dari login ke mainContentPage)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Event listener untuk tombol "Register" di halaman register (dari register ke mainContentPage)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });


    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke paling bawah scrollable area)
        if (scrollToBottomVirtualExperience) {
            scrollToBottomVirtualExperience.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
    }


    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const mainContentPage = document.getElementById('mainContentPage'); // Halaman konten utama yang scrollable
    const virtualRealityDetailPage = document.getElementById('virtualRealityDetailPage'); // Halaman detail VR BARU

    // Dapatkan referensi ke tombol-tombol navigasi utama
    const masukBtn = document.getElementById('masukBtn');
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn');
    const signupLoginBtn = document.getElementById('signupLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');

    // Dapatkan referensi ke input password dan toggle eye icon
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience');
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience');
    const scrollToBottomVirtualExperience = document.getElementById('scrollToBottomVirtualExperience');

    // Dapatkan referensi untuk tombol baru
    const exploreVrBtn = document.getElementById('exploreVrBtn'); // Tombol Explore VR di main content
    const backToMainContentBtn = document.getElementById('backToMainContentBtn'); // Tombol Back di halaman detail VR

    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
        // Pastikan halaman detail VR discroll ke atas saat dibuka
        if (pageToShow === virtualRealityDetailPage) {
            virtualRealityDetailPage.scrollTop = 0;
        }
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (dari login ke mainContentPage)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Event listener untuk tombol "Register" di halaman register (dari register ke mainContentPage)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke paling bawah scrollable area)
        if (scrollToBottomVirtualExperience) {
            scrollToBottomVirtualExperience.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Event listener untuk tombol "Explore VR"
    if (exploreVrBtn) {
        exploreVrBtn.addEventListener('click', () => {
            showPage(virtualRealityDetailPage); // Tampilkan halaman detail VR
        });
    }

    // Event listener untuk tombol "Back" di halaman detail VR
    if (backToMainContentBtn) {
        backToMainContentBtn.addEventListener('click', () => {
            showPage(mainContentPage); // Kembali ke halaman konten utama
        });
    }


    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const mainContentPage = document.getElementById('mainContentPage'); // Halaman konten utama yang scrollable
    const virtualRealityDetailPage = document.getElementById('virtualRealityDetailPage'); // Halaman detail VR
    const mixedRealityDetailPage = document.getElementById('mixedRealityDetailPage'); // Halaman detail MR BARU

    // Dapatkan referensi ke tombol-tombol navigasi utama
    const masukBtn = document.getElementById('masukBtn');
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn');
    const signupLoginBtn = document.getElementById('signupLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');

    // Dapatkan referensi ke input password dan toggle eye icon
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience');
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience');
    const scrollToBottomVirtualExperience = document.getElementById('scrollToBottomVirtualExperience');

    // Dapatkan referensi untuk tombol baru
    const exploreVrBtn = document.getElementById('exploreVrBtn'); // Tombol Explore VR di main content
    const backToMainContentFromVr = document.getElementById('backToMainContentFromVr'); // Tombol Back di halaman detail VR (ID diperbarui)

    const exploreMrBtn = document.getElementById('exploreMrBtn'); // Tombol Explore MR di main content BARU
    const backToMainContentFromMr = document.getElementById('backToMainContentFromMr'); // Tombol Back di halaman detail MR BARU


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
        // Pastikan halaman detail VR/MR discroll ke atas saat dibuka
        if (pageToShow === virtualRealityDetailPage || pageToShow === mixedRealityDetailPage) {
            pageToShow.scrollTop = 0;
        }
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (dari login ke mainContentPage)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Event listener untuk tombol "Register" di halaman register (dari register ke mainContentPage)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke paling bawah scrollable area)
        if (scrollToBottomVirtualExperience) {
            scrollToBottomVirtualExperience.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Event listener untuk tombol "Explore VR"
    if (exploreVrBtn) {
        exploreVrBtn.addEventListener('click', () => {
            showPage(virtualRealityDetailPage); // Tampilkan halaman detail VR
        });
    }

    // Event listener untuk tombol "Back" di halaman detail VR
    if (backToMainContentFromVr) {
        backToMainContentFromVr.addEventListener('click', () => {
            showPage(mainContentPage); // Kembali ke halaman konten utama
        });
    }

    // Event listener untuk tombol "Explore MR" (BARU)
    if (exploreMrBtn) {
        exploreMrBtn.addEventListener('click', () => {
            showPage(mixedRealityDetailPage); // Tampilkan halaman detail MR
        });
    }

    // Event listener untuk tombol "Back" di halaman detail MR (BARU)
    if (backToMainContentFromMr) {
        backToMainContentFromMr.addEventListener('click', () => {
            showPage(mainContentPage); // Kembali ke halaman konten utama
        });
    }


    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen halaman
    const welcomePage = document.getElementById('welcomePage');
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const mainContentPage = document.getElementById('mainContentPage'); // Halaman konten utama yang scrollable
    const virtualRealityDetailPage = document.getElementById('virtualRealityDetailPage'); // Halaman detail VR
    const mixedRealityDetailPage = document.getElementById('mixedRealityDetailPage'); // Halaman detail MR
    const onlineExercisesDetailPage = document.getElementById('onlineExercisesDetailPage'); // Halaman detail Online Exercises BARU

    // Dapatkan referensi ke tombol-tombol navigasi utama
    const masukBtn = document.getElementById('masukBtn');
    const daftarWelcomeBtn = document.getElementById('daftarWelcomeBtn');
    const signupLoginBtn = document.getElementById('signupLoginBtn');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');

    // Dapatkan referensi ke input password dan toggle eye icon
    const loginPasswordField = document.getElementById('password');
    const loginPasswordToggle = document.querySelector('#loginPage .password-toggle');

    const registerPasswordField = document.getElementById('reg-password');
    const registerPasswordToggle = document.querySelector('#registerPage #reg-password + .password-toggle');
    const registerConfirmPasswordField = document.getElementById('reg-confirm-password');
    const registerConfirmPasswordToggle = document.querySelector('#registerPage #reg-confirm-password + .password-toggle');

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience');
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience');
    const scrollToBottomVirtualExperience = document.getElementById('scrollToBottomVirtualExperience');

    // Dapatkan referensi untuk tombol-tombol Explore/View
    const exploreVrBtn = document.getElementById('exploreVrBtn'); // Tombol Explore VR di main content
    const backToMainContentFromVr = document.getElementById('backToMainContentFromVr'); // Tombol Back di halaman detail VR

    const exploreMrBtn = document.getElementById('exploreMrBtn'); // Tombol Explore MR di main content
    const backToMainContentFromMr = document.getElementById('backToMainContentFromMr'); // Tombol Back di halaman detail MR

    const viewOnlineExercisesBtn = document.getElementById('viewOnlineExercisesBtn'); // Tombol View Exercises di main content BARU
    const backToMainContentFromOnlineExercises = document.getElementById('backToMainContentFromOnlineExercises'); // Tombol Back di halaman detail Online Exercises BARU


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
        // Pastikan halaman detail VR/MR/Online Exercises discroll ke atas saat dibuka
        if (pageToShow === virtualRealityDetailPage || pageToShow === mixedRealityDetailPage || pageToShow === onlineExercisesDetailPage) {
            pageToShow.scrollTop = 0;
        }
    };

    // Event listener untuk tombol "Masuk" (dari welcome ke login)
    masukBtn.addEventListener('click', () => {
        showPage(loginPage);
    });

    // Event listener untuk tombol "Daftar" di halaman welcome (dari welcome ke register)
    daftarWelcomeBtn.addEventListener('click', () => {
        showPage(registerPage);
    });

    // Event listener untuk tombol "Signup" di halaman login (dari login ke register)
    signupLoginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(registerPage);
    });

    // Event listener untuk tombol 'X' di halaman register (dari register kembali ke welcome)
    closeRegisterBtn.addEventListener('click', () => {
        showPage(welcomePage);
    });

    // Event listener untuk tombol "Login" di halaman login (dari login ke mainContentPage)
    loginSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi login
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Event listener untuk tombol "Register" di halaman register (dari register ke mainContentPage)
    registerSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Di sini Anda bisa menambahkan logika validasi register
        // Jika validasi berhasil:
        showPage(mainContentPage);
    });

    // Toggle visibility password untuk halaman LOGIN
    if (loginPasswordToggle && loginPasswordField) {
        loginPasswordToggle.addEventListener('click', () => {
            if (loginPasswordField.type === 'password') {
                loginPasswordField.type = 'text';
            } else {
                loginPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (password)
    if (registerPasswordToggle && registerPasswordField) {
        registerPasswordToggle.addEventListener('click', () => {
            if (registerPasswordField.type === 'password') {
                registerPasswordField.type = 'text';
            } else {
                registerPasswordField.type = 'password';
            }
        });
    }

    // Toggle visibility password untuk halaman REGISTER (confirm password)
    if (registerConfirmPasswordToggle && registerConfirmPasswordField) {
        registerConfirmPasswordToggle.addEventListener('click', () => {
            if (registerConfirmPasswordField.type === 'password') {
                registerConfirmPasswordField.type = 'text';
            } else {
                registerConfirmPasswordField.type = 'password';
            }
        });
    }

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke paling bawah scrollable area)
        if (scrollToBottomVirtualExperience) {
            scrollToBottomVirtualExperience.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Event listener untuk tombol "Explore VR"
    if (exploreVrBtn) {
        exploreVrBtn.addEventListener('click', () => {
            showPage(virtualRealityDetailPage); // Tampilkan halaman detail VR
        });
    }

    // Event listener untuk tombol "Back" di halaman detail VR
    if (backToMainContentFromVr) {
        backToMainContentFromVr.addEventListener('click', () => {
            showPage(mainContentPage); // Kembali ke halaman konten utama
        });
    }

    // Event listener untuk tombol "Explore MR"
    if (exploreMrBtn) {
        exploreMrBtn.addEventListener('click', () => {
            showPage(mixedRealityDetailPage); // Tampilkan halaman detail MR
        });
    }

    // Event listener untuk tombol "Back" di halaman detail MR
    if (backToMainContentFromMr) {
        backToMainContentFromMr.addEventListener('click', () => {
            showPage(mainContentPage); // Kembali ke halaman konten utama
        });
    }

    // Event listener untuk tombol "View Exercises" (BARU)
    if (viewOnlineExercisesBtn) {
        viewOnlineExercisesBtn.addEventListener('click', () => {
            showPage(onlineExercisesDetailPage); // Tampilkan halaman detail Online Exercises
        });
    }

    // Event listener untuk tombol "Back" di halaman detail Online Exercises (BARU)
    if (backToMainContentFromOnlineExercises) {
        backToMainContentFromOnlineExercises.addEventListener('click', () => {
            showPage(mainContentPage); // Kembali ke halaman konten utama
        });
    }

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (kode yang sudah ada) ...

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience');
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience');
    const scrollToBottomVirtualExperience = document.getElementById('scrollToBottomVirtualExperience'); // Panah bawah lama
    const scrollToLearningJourney = document.getElementById('scrollToLearningJourney'); // Panah baru dari Virtual Experience ke Learning Journey BARU
    const scrollToTopLearningJourney = document.getElementById('scrollToTopLearningJourney'); // Panah baru dari Learning Journey ke Virtual Experience BARU

    // Dapatkan referensi untuk tombol-tombol Explore/View
    // ... (kode yang sudah ada untuk exploreVrBtn, exploreMrBtn, viewOnlineExercisesBtn) ...


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
        // Pastikan halaman detail VR/MR/Online Exercises discroll ke atas saat dibuka
        if (pageToShow === virtualRealityDetailPage || pageToShow === mixedRealityDetailPage || pageToShow === onlineExercisesDetailPage) {
            pageToShow.scrollTop = 0;
        }
    };

    // ... (Event listener navigasi halaman: masukBtn, daftarWelcomeBtn, signupLoginBtn, closeRegisterBtn, loginSubmitBtn, registerSubmitBtn) ...

    // ... (Toggle visibility password) ...

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke awal bagian The learning journey) BARU
        if (scrollToLearningJourney) {
            scrollToLearningJourney.addEventListener('click', () => {
                const learningJourneySection = document.querySelector('.learning-journey-section');
                if (learningJourneySection) {
                    scrollableContentWrapper.scrollTo({
                        top: learningJourneySection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di The learning journey (gulir ke awal bagian Virtual Experience) BARU
        if (scrollToTopLearningJourney) {
            scrollToTopLearningJourney.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (jika ada, gulir ke paling bawah scrollable area)
        // Jika Anda tidak ingin panah ini muncul lagi setelah menambahkan "learning journey", Anda bisa menghapusnya
        // atau memindahkannya ke bagian paling bawah "learning journey" jika ada konten lain setelahnya.
        // Untuk saat ini, saya tinggalkan dengan asumsi mungkin akan dihapus.
        if (scrollToBottomVirtualExperience) {
            scrollToBottomVirtualExperience.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ... (Event listener tombol Explore/View dan Back untuk VR, MR, Online Exercises) ...

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (kode yang sudah ada) ...

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience');
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience');
    // const scrollToBottomVirtualExperience = document.getElementById('scrollToBottomVirtualExperience'); // Hapus atau biarkan jika masih perlu
    const scrollToLearningJourney = document.getElementById('scrollToLearningJourney');
    const scrollToTopLearningJourney = document.getElementById('scrollToTopLearningJourney');
    const scrollToCustomerReviews = document.getElementById('scrollToCustomerReviews'); // Panah baru dari Learning Journey ke Customer Reviews BARU
    const scrollToTopCustomerReviews = document.getElementById('scrollToTopCustomerReviews'); // Panah baru dari Customer Reviews ke Learning Journey BARU


    // ... (Dapatkan referensi untuk tombol-tombol Explore/View dan halaman detail) ...


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
        // Pastikan halaman detail VR/MR/Online Exercises discroll ke atas saat dibuka
        if (pageToShow === virtualRealityDetailPage || pageToShow === mixedRealityDetailPage || pageToShow === onlineExercisesDetailPage) {
            pageToShow.scrollTop = 0;
        }
    };

    // ... (Event listener navigasi halaman: masukBtn, daftarWelcomeBtn, signupLoginBtn, closeRegisterBtn, loginSubmitBtn, registerSubmitBtn) ...

    // ... (Toggle visibility password) ...

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke awal bagian The learning journey)
        if (scrollToLearningJourney) {
            scrollToLearningJourney.addEventListener('click', () => {
                const learningJourneySection = document.querySelector('.learning-journey-section');
                if (learningJourneySection) {
                    scrollableContentWrapper.scrollTo({
                        top: learningJourneySection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di The learning journey (gulir ke awal bagian Virtual Experience)
        if (scrollToTopLearningJourney) {
            scrollToTopLearningJourney.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di The learning journey (gulir ke awal bagian Customer Reviews) BARU
        if (scrollToCustomerReviews) {
            scrollToCustomerReviews.addEventListener('click', () => {
                const customerReviewsSection = document.querySelector('.customer-reviews-section');
                if (customerReviewsSection) {
                    scrollableContentWrapper.scrollTo({
                        top: customerReviewsSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Customer Reviews (gulir ke awal bagian The learning journey) BARU
        if (scrollToTopCustomerReviews) {
            scrollToTopCustomerReviews.addEventListener('click', () => {
                const learningJourneySection = document.querySelector('.learning-journey-section');
                if (learningJourneySection) {
                    scrollableContentWrapper.scrollTo({
                        top: learningJourneySection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (jika ada, gulir ke paling bawah scrollable area)
        // Jika Anda sebelumnya memiliki scrollToBottomVirtualExperience dan ingin menghapusnya
        // karena sekarang ada scrollToLearningJourney, Anda bisa menghapus baris di bawah ini.
        // Untuk saat ini, saya mengomentarinya.
        /*
        if (scrollToBottomVirtualExperience) {
            scrollToBottomVirtualExperience.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: scrollableContentWrapper.scrollHeight,
                    behavior: 'smooth'
                });
            });
        }
        */
    }

    // ... (Event listener tombol Explore/View dan Back untuk VR, MR, Online Exercises) ...

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (kode yang sudah ada) ...

    // Dapatkan referensi untuk tombol scroll di halaman konten utama
    const scrollableContentWrapper = document.querySelector('.scrollable-content-wrapper');
    const scrollToTopAI = document.getElementById('scrollToTopAI');
    const scrollToTopWhy = document.getElementById('scrollToTopWhy');
    const scrollToVirtualExperience = document.getElementById('scrollToVirtualExperience');
    const scrollToTopVirtualExperience = document.getElementById('scrollToTopVirtualExperience');
    const scrollToLearningJourney = document.getElementById('scrollToLearningJourney');
    const scrollToTopLearningJourney = document.getElementById('scrollToTopLearningJourney');
    const scrollToCustomerReviews = document.getElementById('scrollToCustomerReviews');
    const scrollToTopCustomerReviews = document.getElementById('scrollToTopCustomerReviews');
    const scrollToAllAccess = document.getElementById('scrollToAllAccess'); // Panah baru dari Customer Reviews ke All Access BARU
    const scrollToTopAllAccess = document.getElementById('scrollToTopAllAccess'); // Panah baru dari All Access ke Customer Reviews BARU


    // ... (Dapatkan referensi untuk tombol-tombol Explore/View dan halaman detail) ...


    // Fungsi untuk menampilkan halaman tertentu dan menyembunyikan yang lain
    const showPage = (pageToShow) => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        pageToShow.classList.add('active');
        // Reset scroll position to top only for scrollable pages
        if (pageToShow === mainContentPage && scrollableContentWrapper) {
            scrollableContentWrapper.scrollTop = 0;
        }
        // Pastikan halaman detail VR/MR/Online Exercises discroll ke atas saat dibuka
        if (pageToShow === virtualRealityDetailPage || pageToShow === mixedRealityDetailPage || pageToShow === onlineExercisesDetailPage) {
            pageToShow.scrollTop = 0;
        }
    };

    // ... (Event listener navigasi halaman: masukBtn, daftarWelcomeBtn, signupLoginBtn, closeRegisterBtn, loginSubmitBtn, registerSubmitBtn) ...

    // ... (Toggle visibility password) ...

    // Fungsi scroll untuk panah di halaman utama
    if (scrollableContentWrapper) {
        // Panah atas di AI Roleplays
        if (scrollToTopAI) {
            scrollToTopAI.addEventListener('click', () => {
                scrollableContentWrapper.scrollTo({
                    top: 0, // Gulir ke paling atas
                    behavior: 'smooth'
                });
            });
        }

        // Panah atas di Why Speak Tech? (gulir ke awal bagian AI-Powered Roleplays)
        if (scrollToTopWhy) {
            scrollToTopWhy.addEventListener('click', () => {
                const aiSection = document.querySelector('.ai-roleplays-section');
                if (aiSection) {
                    scrollableContentWrapper.scrollTo({
                        top: aiSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Why Speak Tech? (gulir ke awal bagian Virtual Experience)
        if (scrollToVirtualExperience) {
            scrollToVirtualExperience.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Virtual Experience (gulir ke awal bagian Why Speak Tech?)
        if (scrollToTopVirtualExperience) {
            scrollToTopVirtualExperience.addEventListener('click', () => {
                const whySpeakTechSection = document.querySelector('.why-speak-tech-section');
                if (whySpeakTechSection) {
                    scrollableContentWrapper.scrollTo({
                        top: whySpeakTechSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Virtual Experience (gulir ke awal bagian The learning journey)
        if (scrollToLearningJourney) {
            scrollToLearningJourney.addEventListener('click', () => {
                const learningJourneySection = document.querySelector('.learning-journey-section');
                if (learningJourneySection) {
                    scrollableContentWrapper.scrollTo({
                        top: learningJourneySection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di The learning journey (gulir ke awal bagian Virtual Experience)
        if (scrollToTopLearningJourney) {
            scrollToTopLearningJourney.addEventListener('click', () => {
                const virtualExperienceSection = document.querySelector('.virtual-experience-section');
                if (virtualExperienceSection) {
                    scrollableContentWrapper.scrollTo({
                        top: virtualExperienceSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di The learning journey (gulir ke awal bagian Customer Reviews)
        if (scrollToCustomerReviews) {
            scrollToCustomerReviews.addEventListener('click', () => {
                const customerReviewsSection = document.querySelector('.customer-reviews-section');
                if (customerReviewsSection) {
                    scrollableContentWrapper.scrollTo({
                        top: customerReviewsSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di Customer Reviews (gulir ke awal bagian The learning journey)
        if (scrollToTopCustomerReviews) {
            scrollToTopCustomerReviews.addEventListener('click', () => {
                const learningJourneySection = document.querySelector('.learning-journey-section');
                if (learningJourneySection) {
                    scrollableContentWrapper.scrollTo({
                        top: learningJourneySection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah bawah di Customer Reviews (gulir ke awal bagian All Access) BARU
        if (scrollToAllAccess) {
            scrollToAllAccess.addEventListener('click', () => {
                const allAccessSection = document.querySelector('.all-access-section');
                if (allAccessSection) {
                    scrollableContentWrapper.scrollTo({
                        top: allAccessSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Panah atas di All Access (gulir ke awal bagian Customer Reviews) BARU
        if (scrollToTopAllAccess) {
            scrollToTopAllAccess.addEventListener('click', () => {
                const customerReviewsSection = document.querySelector('.customer-reviews-section');
                if (customerReviewsSection) {
                    scrollableContentWrapper.scrollTo({
                        top: customerReviewsSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

    }

    // ... (Event listener tombol Explore/View dan Back untuk VR, MR, Online Exercises) ...

    // Memastikan halaman welcome muncul pertama kali saat dimuat
    showPage(welcomePage);
});