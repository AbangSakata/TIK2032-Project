/* Efek animasi highlight box pada bagian menu navigasi */
const navList = document.getElementById('navList');
const navItems = navList.getElementsByTagName('li');

for (let i = 0; i < navItems.length; i++) {
    const highlightBox = document.createElement('div');
    highlightBox.classList.add('highlight-box');
    navItems[i].appendChild(highlightBox);

    navItems[i].addEventListener('mouseenter', function() {
    const box = this.querySelector('.highlight-box');
    box.style.width = '100%';
    });

    navItems[i].addEventListener('mouseleave', function() {
    const box = this.querySelector('.highlight-box');
    box.style.width = '0';
    });
    }

/* Efek animasi fade-in-out pada teks Selamat Datang */
const selamatDatang = document.querySelector('.fade-in-out');
    selamatDatang.addEventListener('animationiteration', () => {
      selamatDatang.classList.remove('fade-in-out');
      void selamatDatang.offsetWidth; 
      selamatDatang.classList.add('fade-in-out');
    });
  
const selamatDatangParagraf = document.querySelector('.fade-in-out2');
    selamatDatangParagraf.addEventListener('animationiteration', () => {
      selamatDatangParagraf.classList.remove('fade-in-out2');
      void selamatDatangParagraf.offsetWidth;
      selamatDatangParagraf.classList.add('fade-in-out2');
    });
  
