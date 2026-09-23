// Validation bổ sung cho form đăng ký (HTML5 đã chặn phần lớn)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.register');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    if (dob && dob.value && age && age.value) {
      const birth = new Date(dob.value);
      const now = new Date();
      let calc = now.getFullYear() - birth.getFullYear();
      const m = now.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) calc--;
      if (Math.abs(calc - Number(age.value)) > 1) {
        if (!confirm(`Tuổi bạn nhập (${age.value}) khác tuổi tính từ ngày sinh (khoảng ${calc}). Vẫn gửi?`)) {
          e.preventDefault();
          return;
        }
      }
    }
    // demo: không gửi server thật
    // e.preventDefault();
    // alert('Đăng ký thành công (demo)!');
  });
});
