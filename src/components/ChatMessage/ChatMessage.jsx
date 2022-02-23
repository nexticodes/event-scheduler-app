import './ChatMessage.css';

const ChatMessage = ({userId, m, i}) => {
    return (
        <div className={`chat-bubble ${userId === m.user ? `owner` : `other`}`}>
            <p>{m.content} {i}</p>
        </div>
    )
}

export default ChatMessage;