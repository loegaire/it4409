# Bài tập 4 — Xây dựng CSS cho trang responsive

Trang `index.html` là **file HTML gốc theo đề, giữ nguyên 100%** (không sửa một
dòng HTML). Toàn bộ layout + responsive được viết trong file CSS mới.

| File | Mô tả |
|------|-------|
| `index.html` | HTML gốc của đề bài (bản copy nguyên vẹn từ file `trang-goc.html`) |
| `style.css` | File CSS do sinh viên viết — dùng bởi `index.html` |
| `images/` | Ảnh đi kèm trong đề |

## Cách xây dựng

Áp dụng đúng kiến thức trong slide Lec 3:

1. **Meta viewport** — file HTML gốc đã có sẵn
   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
2. **Box model** — reset `*, *::before, *::after { box-sizing: border-box }`
   để `width: 100%` + `padding` không làm khối tràn ra ngoài.
3. **Flexible image** — `img { max-width: 100%; height: auto; }` để ảnh tự co
   theo khung chứa và giữ đúng tỉ lệ.
4. **Relative units** — dùng `%`, `em`, `clamp()` cho cỡ chữ và khoảng cách
   (`--do-dai-chu`, `--khoang-cach`) thay vì px cứng.
5. **Flexbox** — header/nav dùng `display: flex; flex-wrap: wrap` để menu tự
   xuống dòng khi màn hình hẹp.
6. **Grid** — `.value-list`, `.team-list`, `.footer-cols` dùng
   `display: grid` với `grid-template-columns`; layout chính dùng
   `grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr)`.
7. **Media query (mobile-first)** — mặc định là bố cục 1 cột, rồi mở rộng dần:

| Khoảng rộng | Thiết bị | Bố cục |
|-------------|----------|--------|
| `< 600px` | Điện thoại | 1 cột, nav xuống dòng, sidebar dưới nội dung |
| `600px – 992px` | Máy tính bảng | Danh sách 2 cột, footer 2 cột |
| `≥ 993px` | Laptop/desktop | Danh sách 3 cột, footer 4 cột, sidebar nằm bên phải và `position: sticky` |

Ngoài ra có `@media (min-width: 1200px)` (giới hạn bề ngang để dòng chữ không
quá dài) và `@media (prefers-reduced-motion: reduce)` (tôn trọng thiết lập giảm
chuyển động của hệ điều hành).

## Cách kiểm tra

- Mở DevTools (F12) → bật *Device toolbar* (Ctrl/Cmd + Shift + M), lần lượt thử
  375px (mobile), 768px (tablet), 1280px (desktop).
- Hoặc co giãn cửa sổ: dưới 600px thấy 1 cột, 600–992px thấy 2 cột, từ 993px
  thấy 3 cột và sidebar nằm bên phải.
- Kiểm tra không có thanh cuộn ngang (không tràn ngang) ở cả 3 kích thước.