# Tử Vi Hôm Nay

Trang web đơn giản dùng Next.js để hiển thị **lịch vạn niên**, tử vi 12 con giáp, 12 cung hoàng đạo và khung chat hỏi đáp. Giao diện lấy tông màu tím đen huyền ảo.

## Cấu trúc
- `/calendar` &mdash; trang xem lịch tháng, cho phép chọn tháng/năm.
- `/zodiac` &mdash; tử vi ngắn cho 12 con giáp.
- `/horoscope` &mdash; tử vi ngắn cho 12 cung hoàng đạo.
- Thành phần `ChatWidget` hiển thị khung trò chuyện (mô phỏng trả lời của ChatGPT).

## Cài đặt và chạy thử
```bash
npm install
npm run dev
```

Khởi chạy ở địa chỉ `http://localhost:3000`. Cần thiết lập biến môi trường `DATABASE_URL` nếu muốn kết nối PostgreSQL (hiện demo không sử dụng database).
