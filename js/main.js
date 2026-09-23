// Validation bổ sung cho form đăng ký (HTML5 đã chặn phần lớn)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.register');
  if (!form) return;
  const dobInput = document.getElementById('dob');
  if (dobInput) {
    // Ngăn chọn ngày sinh trong tương lai (kể cả khi browser không hỗ trợ max)
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);
  }
  form.addEventListener('submit', (e) => {
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    if (dob && dob.value) {
      const birth = new Date(dob.value);
      const now = new Date();
      if (birth > now) {
        e.preventDefault();
        alert('Ngày sinh không được ở tương lai.');
        dob.focus();
        return;
      }
    }
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
