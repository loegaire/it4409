/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------
const oTimKiem = document.getElementById("o-tim-kiem");
const danhSach = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// F1 + F2 + F3. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem, lọc tin khi gõ vào #o-tim-kiem (keyup) và thông báo #khong-thay.
function capNhatDanhSach() {
	const tuKhoa = oTimKiem.value;
	const tuKhoaThuong = tuKhoa.toLowerCase();
	const cacMuc = danhSach.querySelectorAll("li");
	let soHien = 0;

	for (const muc of cacMuc) {
		const tieuDe = muc.querySelector("h3").textContent;
		const noiDung = muc.querySelector("p").textContent;
		const vanBan = (tieuDe + " " + noiDung).toLowerCase();

		if (vanBan.includes(tuKhoaThuong)) {
			muc.classList.remove("an");
			soHien++;
		} else {
			muc.classList.add("an");
		}
	}

	boDem.textContent = `Đang hiển thị ${soHien}/${cacMuc.length} tin`;

	if (soHien === 0) {
		khongThay.classList.remove("an");
		khongThay.textContent = `Không tìm thấy tin nào cho "${tuKhoa}"`;
	} else {
		khongThay.classList.add("an");
	}
}

capNhatDanhSach();
oTimKiem.addEventListener("keyup", capNhatDanhSach);

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
danhSach.addEventListener("click", (e) => {
	if (!e.target.classList.contains("more")) {
		return;
	}
	const nut = e.target;
	const muc = nut.closest("li");
	const doan = muc.querySelector("p");

	if (doan.classList.contains("day-du")) {
		doan.classList.remove("day-du");
		nut.textContent = "Read more >>";
	} else {
		doan.classList.add("day-du");
		nut.textContent = "Thu gọn <<";
	}
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
nutDang.addEventListener("click", () => {
	if (oTieuDe.value.trim() === "" || oNoiDung.value.trim() === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	const muc = document.createElement("li");

	const thoiGian = document.createElement("span");
	thoiGian.className = "time";
	thoiGian.textContent = homNay();

	const tieuDe = document.createElement("h3");
	tieuDe.textContent = oTieuDe.value;

	const noiDung = document.createElement("p");
	noiDung.textContent = oNoiDung.value;

	const nutMore = document.createElement("button");
	nutMore.type = "button";
	nutMore.className = "more";
	nutMore.textContent = "Read more >>";

	muc.append(thoiGian, tieuDe, noiDung, nutMore);
	danhSach.prepend(muc);

	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";

	capNhatDanhSach();
});
