import Head from 'next/head'
import '../styles/globals.css'

const zodiac = [
  'Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'
]

const predictions = zodiac.map(name => ({ name, text: 'Dự đoán cho tuổi ' + name }))

export default function ZodiacPage() {
  return (
    <div className="container">
      <Head>
        <title>Tử Vi 12 Con Giáp</title>
      </Head>
      <h1>Tử Vi 12 Con Giáp</h1>
      {predictions.map(p => (
        <div key={p.name} className="placeholder">
          <strong>{p.name}</strong>: {p.text}
        </div>
      ))}
    </div>
  )
}
