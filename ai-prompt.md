# Prompt AI dùng để refactor index.html → index_new.html (Task 5)

> Prompt này được lưu lại để minh chứng việc "Xây dựng prompt để sử dụng công cụ AI",
> đúng yêu cầu: giữ nguyên bố cục + nội dung, chỉ chuyển sang semantic HTML5 + SEO cơ bản.

## Prompt đã dùng

```
Bạn là frontend dev. Hãy refactor file index.html (layout Blakletterpress dùng toàn <div id="header|contents|main|sidebar|navigation|footer">, không có meta SEO, img không alt, nhiều style inline, nhiều <div> thay heading) sang index_new.html với yêu cầu:

1. GIỮ NGUYÊN 100% bố cục và nội dung nhìn thấy:
   - Header: motto trái, logo BLP giữa, search phải
   - Sidebar trái: nav HOME/ABOUT/NEWS/BLOG, box Connect with us, box Placeholder + View More
   - Main phải: tiêu đề, ảnh, 2 đoạn văn, 2 tin list, ảnh cuối
   - Footer 4 cột + copyright. Không đổi màu, không đổi thứ tự, tái dùng css/style.css hiện có.
2. CHỈ refactor sang semantic HTML5:
   - <header>, <nav aria-label>, <main id="main-content">, <article>, <section aria-labelledby>, <aside>, <footer>, <figure>/<figcaption>, <time datetime>
   - Heading đúng thứ bậc: 1 <h1> duy nhất, tiếp <h2>, <h3>. Không dùng <div> thay heading.
   - Thay style inline bằng class đã có (.meta, .more...) nếu có thể.
3. SEO cơ bản:
   - <html lang="vi">, <title> mô tả 55-60 ký tự, meta description 150-160 ký tự tiếng Việt, keywords, author, robots, canonical
   - Open Graph + Twitter card + theme-color + JSON-LD NewsMediaOrganization
   - Mọi <img> có alt mô tả, width/height, loading="lazy" (trừ ảnh đầu)
   - Thêm skip-link, label cho search, aria-current, aria-hidden cho icon trang trí
4. Không thêm JS, không đổi URL css, không bịa nội dung mới. Xuất ra 1 file HTML hoàn chỉnh, giải thích ngắn gọn từng nhóm thay đổi (semantic / SEO / a11y) dưới dạng comment hoặc bảng.
```

## Checklist kiểm tra sau khi AI trả về (đã áp dụng)

- [x] Diff nội dung text index.html vs index_new.html: tiêu đề, đoạn văn, list tin, footer giữ nguyên
- [x] Layout render giống nhau (flex 960px, sidebar 235px, main còn lại) vì dùng chung css/style.css
- [x] Validator: 1 h1, lang="vi", img đủ alt, time có datetime, nav/main/aside/footer đúng
- [x] SEO: title, description, canonical, OG, JSON-LD có mặt, xem bằng View Source
- [x] Không layout riêng, không thêm dependency

## Cách chạy lại

1. Mở `index.html` + prompt trên trong ChatGPT / Claude / Copilot
2. Lưu output thành `index_new.html`, mở 2 tab so sánh trực quan
3. Chạy `python3 -m http.server` và kiểm tra responsive 960px / mobile
