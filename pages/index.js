import Head from 'next/head';
import { useState } from 'react';
import ChatWidget from '../components/ChatWidget';
import '../styles/globals.css';

export default function Home() {
  const [dob, setDob] = useState('');

  return (
    <div className="container">
      <Head>
        <title>Lịch Vạn Niên &amp; Tử Vi</title>
      </Head>
      <h1>Lịch Vạn Niên</h1>
      <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
      <p>Chọn ngày để xem thông tin chi tiết về can chi, giờ hoàng đạo...</p>

      <h2>Tử Vi 12 Con Giáp</h2>
      <p>Nhập ngày tháng năm sinh để tính tuổi con giáp:</p>
      <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
      <div className="placeholder">Dự đoán sẽ xuất hiện ở đây.</div>

      <h2>Tử Vi 12 Cung Hoàng Đạo</h2>
      <div className="placeholder">Nội dung về 12 cung hoàng đạo.</div>

      <ChatWidget />
    </div>
  );
}
