$(document).ready(function() {
    // Fungsi untuk memuat konten halaman menggunakan AJAX
    function loadContent(page) {
        $("#main-content").load(page, function() {
            // Memanggil fungsi loadImages setelah konten dimuat
            loadImages();
        });
      }
  
    // Event listener untuk setiap link navigasi
     $("#navList li a").click(function(e) {
        e.preventDefault();
        var page = $(this).attr("href");
        loadContent(page);
      });
  
      // Memuat halaman Home secara default saat pertama kali diakses
      loadContent("index.html");
  
      // Fungsi untuk memuat gambar-gambar pada halaman gallery
      function loadImages() {
          $(".lazy").each(function() {
              var imgSrc = $(this).data("src");
              $(this).attr("src", imgSrc);
          });
      }
  });