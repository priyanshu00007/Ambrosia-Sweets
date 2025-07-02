"use client";
import React, { useState } from 'react';

const botReply = (message) => {
  // Simple bot logic
  if (message.toLowerCase().includes('hello')) {
    return "Hi there! How can I help you?";
  }
  if (message.toLowerCase().includes('help')) {
    return "Sure! Ask me anything.";
  }
  return "Sorry, I didn't understand that.";
};

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botMessage = { sender: 'bot', text: botReply(input) };

    setMessages((msgs) => [...msgs, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '500px' }}>
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', background: '#f9f9f9' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '8px 0' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '16px',
              background: msg.sender === 'user' ? '#007bff' : '#e5e5ea',
              color: msg.sender === 'user' ? '#fff' : '#333'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }}
          placeholder="Type your message..."
        />
        <button type="submit" style={{ padding: '12px 20px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;