function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    // Tạo hiệu ứng highlight section khi scroll đến
    el.classList.add("highlight-scroll");
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Xóa hiệu ứng sau khi highlight xong
    setTimeout(() => {
      el.classList.remove("highlight-scroll");
    }, 1200);
  }
}
