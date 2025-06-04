import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    // Placeholder for ChatGPT API call
    setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: 'ChatGPT trả lời ở đây.' }]);
    setInput('');
  };

  return (
    <div className="chat-widget">
      <h3>Hỏi ChatGPT</h3>
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>{m.content}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Đặt câu hỏi..."
      />
      <button onClick={sendMessage}>Gửi</button>
    </div>
  );
}
