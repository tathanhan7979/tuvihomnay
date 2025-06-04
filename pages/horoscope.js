import Head from 'next/head'
import '../styles/globals.css'

const signs = [
  'Bạch Dương','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ','Thiên Bình','Bọ Cạp','Nhân Mã','Ma Kết','Bảo Bình','Song Ngư'
]

const predictions = signs.map(name => ({ name, text: 'Dự đoán cho ' + name }))

export default function HoroscopePage() {
  return (
    <div className="container">
      <Head>
        <title>Tử Vi 12 Cung Hoàng Đạo</title>
      </Head>
      <h1>Tử Vi 12 Cung Hoàng Đạo</h1>
      {predictions.map(p => (
        <div key={p.name} className="placeholder">
          <strong>{p.name}</strong>: {p.text}
        </div>
      ))}
    </div>
  )
}
