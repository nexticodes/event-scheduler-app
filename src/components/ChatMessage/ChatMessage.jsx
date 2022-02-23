import './ChatMessage.css';

const ChatMessage = ({userId, m, i}) => {
    const timeSent = () => {
      return new Date(m.createdAt).toLocaleTimeString();
    }

    const dateSent = () => {
        return new Date(m.createdAt).toLocaleDateString();
    }
    return (
        <div className={`chat-bubble ${userId === m.user ? `owner` : `other`}`}>
            <p>{m.content}</p>
            <p className='sent'>Sent {dateSent()} @ {timeSent()}</p>
        </div>
    )
}

export default ChatMessage;