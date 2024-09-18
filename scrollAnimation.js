const lenis = new Lenis();

// Xử lý sự kiện cuộn
lenis.on('scroll', (e) => {
  // Xử lý khi cuộn
});

// Hàm requestAnimationFrame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Thêm sự kiện click cho các liên kết
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định

    const targetId = link.getAttribute('href'); // Lấy ID mục tiêu
    const targetElement = document.querySelector(targetId); // Tìm phần tử mục tiêu

    if (targetElement) {
      // Cuộn đến phần tử mục tiêu
      lenis.scrollTo(targetElement.offsetTop, { duration: 1, easing: (t) => t }); // Thay đổi duration và easing nếu cần
    }
  });
});
