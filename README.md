# Web Assignment - Blakletterpress (index / register / media / SEO refactor)

Bài tập (deadline 27/09/2026):
- 3. `register.html`: trang đăng ký nhận thông tin, dùng lại đúng khung bố cục, main là form (3 fieldset như minh họa).
- 4. `media.html`: trang đa phương tiện + semantic HTML5 cơ bản, dùng lại đúng khung, không layout riêng (article + video + audio + map + figure).
- 5. Refactor `index.html` (div, non-semantic) → `index_new.html` (semantic + SEO, giữ nguyên bố cục/nội dung). Prompt AI xem `ai-prompt.md`.
- Upload lên host cá nhân (GitHub Pages).

## Chạy local
```
cd /home/thinh/school/web
python3 -m http.server 8000
# mở http://localhost:8000/index.html
```

## Deploy (GitHub Pages)
Repo: https://github.com/loegaire/web-blakletterpress
Live: https://loegaire.github.io/web-blakletterpress/
- Push main → Actions `deploy-pages` tự deploy.
