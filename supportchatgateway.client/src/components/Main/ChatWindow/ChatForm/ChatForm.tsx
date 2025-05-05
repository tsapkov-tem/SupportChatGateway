import React, { useState } from "react";
import './ChatForm.css'
interface ChatFormProps {
    onSendMessage: (message: string) => void;
}

export const ChatForm: React.FC<ChatFormProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    }

    return (
        <form className="chat-form" onSubmit={handleSubmit}>
            <textarea
                className="chat-form__input"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Сообщение"
            />
            <button type="submit" className="chat-form__button">▶</button>
        </form>
    );
}