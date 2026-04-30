## 1. Nội dung
* **Hiển thị màn hình Category Details**: Cho phép người dùng xem danh sách các món ăn thuộc một danh mục cụ thể.

## 2. Cấu trúc thư mục dự án (Folder Structure)
* **components/**: Chứa các file có thể tái sử dụng(Herader.tsx, Fooder.tsx).
* **pages/**: Chứa các React component (Ví dụ: `CategoryDetails.tsx`).
* **App.tsx**: Component chính, quản lý giao diện tổng thể và điều hướng.
* **main.tsx**: Điểm khởi chạy (Entry point), render ứng dụng vào DOM.
* **App.css**: File định nghĩa các phong cách giao diện (Styling).

> **Luồng hoạt động**: Vite khởi động và tải `index.html`, sau đó thực thi `main.tsx` để render `App.tsx`. Từ đây, các component con được gọi để hiển thị giao diện (UI) hoàn chỉnh.

## 3. Sơ đồ Sequence
<img width="914" height="836" alt="スクリーンショット 2026-04-27 154901" src="https://github.com/user-attachments/assets/eeadb12d-3a28-47fe-ab01-85c46cd58444" />

