export default function Chat({ socket, title, room }) {
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
    <div className='' width='600' height='800' style={{
      backgroundColor: 'black',
      color: 'white',
    }}>
      <h1>{title}</h1>
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
        const sender = 'Suneel'
        appendMessage(sender, message);
        socket.emit('chat_message', { sender, content: message })
        setMessage('');
        console.log('Sent a message:', message)
      }}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}