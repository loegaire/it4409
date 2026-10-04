# Bài tập 2 — Prompt AI sửa lỗi CSS

## Prompt (dán vào ChatGPT / Claude / Gemini...)

```
Bạn là chuyên gia CSS với kinh nghiệm sửa lỗi box model và position. Tôi có một
trang HTML + CSS (hai file riêng biệt, KHÔNG được thay đổi file HTML). Hãy đọc
file style-loi.css và sửa ĐÚNG CÁC LỖI THẬT để trang hiển thị đúng yêu cầu.

Yêu cầu hiển thị đúng của trang:
1. Thanh menu trên cùng dính lại (sticky) khi cuộn trang và luôn nằm trên ảnh hero.
2. Ảnh hero phủ kín khung hero, tiêu đề nằm chính giữa ảnh.
3. Ba thẻ sản phẩm xếp thành MỘT HÀNG NGANG (không được rớt hàng, kể cả khi
   thu hẹp cửa sổ); mỗi thẻ có nhãn "-20%" hiển thị ở góc trên bên phải của
   chính thẻ đó; ảnh và chữ nằm gọn trong thẻ.
4. Nút "↑" nổi cố định ở góc dưới bên phải màn hình khi cuộn.

QUAN TRỌNG — BẢO VỆ (tuyệt đối không xóa, không "dọn dẹp", không sửa):
Trong file có các đoạn code TRÔNG "thừa/lạ" nhưng thực ra ĐANG ĐÚNG và CẦN
THIẾT cho thiết kế. Nếu bạn xóa chúng sẽ làm hỏng trang:
- `transform: scale(1.08)` trên .hero-bg (hiệu ứng phóng to ảnh hero).
- `margin: -48px auto 48px` (margin âm) trên .products (kéo section sản phẩm
  chồng lên ảnh hero theo thiết kế).
- `overflow-x: hidden` trên .page (chặn thanh cuộn ngang do hiệu ứng scale).
- `z-index: 2` trên .card img (phần tử ảnh nằm trên nền thẻ, dưới nhãn badge).

Phương pháp gợi ý để tìm lỗi:
- Mở DevTools, cuộn trang: kiểm tra menu có dính và nằm trên ảnh không.
- Thu hẹp cửa sổ trình duyệt: kiểm tra 3 thẻ sản phẩm có còn nằm một hàng
  không (tính toán box model: flex-basis + padding + border có vượt quá bề
  rộng container không? box-sizing đang là gì?).
- Kiểm tra nhãn "-20%" trên mỗi thẻ: nó có bị phần tử khác (ví dụ ảnh) che
  mất không? Hãy xem thứ tự paint / z-index của các phần tử đã định vị
  (position) trong cùng một stacking context.

Chỉ sửa các lỗi thật, giữ nguyên phần còn lại. Trả về file CSS đã sửa kèm
giải thích ngắn gọn từng thay đổi.
```

## Kết quả sau khi áp dụng prompt (2 lỗi thật được sửa)

| # | Lỗi | Vị trí | Sửa |
|---|------|--------|-----|
| 1 | `.card` khai báo `box-sizing: content-box` ghi đè `border-box` toàn cục → padding + border cộng thêm vào `flex-basis`, mỗi thẻ rộng ~335px → 3 thẻ + 2 khoảng cách = 1054px > 952px → thẻ rớt hàng | `style-loi.css` (khối `.card`) | Xóa dòng `box-sizing: content-box;` để thẻ kế thừa `border-box` → 3 thẻ vừa đúng 952px, nằm một hàng |
| 2 | `.badge` (z-index auto) bị `.card img` (z-index: 2) che mất vì ảnh phủ toàn bề rộng thẻ và vẽ sau nhãn → nhãn "-20%" không nhìn thấy | `style-loi.css` (khối `.badge`) | Thêm `z-index: 3;` vào `.badge` → nhãn nổi trên ảnh, hiện ở góc trên bên phải thẻ |

## Các đoạn "trông lạ nhưng đúng" được bảo vệ

- `transform: scale(1.08)` trên `.hero-bg` — cố ý phóng to ảnh để phủ kín, tránh hở mép.
- `margin: -48px auto 48px` trên `.products` — kéo section sản phẩm chồng lên ảnh hero theo thiết kế.
- `overflow-x: hidden` trên `.page` — chặn thanh cuộn ngang phát sinh từ `scale(1.08)`.
- `z-index: 2` trên `.card img` — giữ ảnh nằm trên nền thẻ nhưng dưới nhãn badge (z-index: 3).
