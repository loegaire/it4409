# Bài tập 2 — Prompt sửa lỗi CSS (GenAI)

Thư mục này gồm 2 file CSS và trang demo:

| File | Mô tả |
|------|-------|
| `style-loi-goc.css` | File CSS **gốc (bị lỗi)** như trong đề bài — giữ nguyên để đối chiếu |
| `style-loi.css` | File CSS **đã sửa** bằng prompt AI (2 lỗi được fix) — đang được `index.html` sử dụng |
| `index.html` | Trang khuyến mãi đã sửa → mở file này để xem kết quả ĐÚNG |
| `goc.html` | Bản copy của trang nhưng dùng `style-loi-goc.css` → mở file này để xem LỖI (rớt hàng thẻ, nhãn -20% bị che) |
| `prompt-ai.md` | Prompt đã dán vào AI + bảng 2 lỗi sửa + danh sách đoạn code "trông lạ nhưng đúng" được bảo vệ |

## Cách kiểm tra
- Mở `index.html`: menu sticky, hero phủ kín + tiêu đề giữa, 3 thẻ 1 hàng, nhãn -20% hiện trên mỗi thẻ, nút ↑ góc dưới phải.
- Mở `goc.html`: 3 thẻ bị rớt hàng (thẻ 3 xuống dòng), nhãn -20% bị ảnh che mất.
