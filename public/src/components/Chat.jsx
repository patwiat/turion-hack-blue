import { useState, useEffect } from 'react'

export default function Chat({ title, room }) {
  const socket = window.socket;
  const user = window.user;

  if (user) {
    return <div>Please log in.</div>;
  }

  const [roomJoined, setRoomJoined] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const appendMessage = (sender, content) => {
    setMessages(messages => {
      console.log(messages)
      const msgs = structuredClone(messages);
      msgs.push({ sender, content });
      return msgs;
    });
  }

  useEffect(() => {
    (async () => {
      if (!window.didDoTheThing) {
        window.didDoTheThing = true
        const res = await fetch(`http://localhost:3000/chatLogs/${room}`);
        for (const { sender, content } of await res.json()) {
          appendMessage(sender, content)
        }
      }
    })()
  }, [])

  useEffect(() => {
    const chatMessageListener = ({ sender, content }) => {
      appendMessage(sender, content);
    };

    if (!socket.hasListeners('chat_message')) {
      socket.emit('join_room', { room });
      socket.on('chat_message', chatMessageListener);
      setRoomJoined(true);
    }

    () => {
      socket.removeListener(chatMessageListener);
    }
  }, [roomJoined])

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {messages.map(({ sender, content }, i) => {
        return (
          <div key={`message${i}`}>
            <p><b>{sender}</b></p>
            <p>{content}</p>
          </div>
        );
      })}
      <form onSubmit={e => {
        e.preventDefault();
        // TODO: Base on user
        const sender = user?.name ?? 'Anonymous Anteater';
        appendMessage(sender, message);
        socket.emit('chat_message', { sender, content: message })
        setMessage('');
        console.log('Sent a message:', message)
      }}
      style={{ display: 'block' }}>
        <input type="text" value={message} width='100%' onChange={e => setMessage(e.target.value)}/>
        <input type="submit" value="Send" className='bg-black text-white'/>
      </form>
    </div>
  )
}