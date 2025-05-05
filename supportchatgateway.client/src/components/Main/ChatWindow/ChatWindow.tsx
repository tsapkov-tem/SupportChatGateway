import React, { useEffect, useState } from "react";
import { Message } from "../../../types/Message";
import './ChatWindow.css'
import { ChatForm } from "./ChatForm/ChatForm";

interface ChatWindowProps {
    left: number;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ left }) => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setMessages([
            { text: 'Culpa in dolor sunt fugiat occaecat fugiat dolore tempor cillum mollit proident exercitation ipsum commodo.', time: new Date(), sender: false },
            { text: 'Qui quis aliquip nisi reprehenderit tempor ut laborum velit qui in esse est ut qui. Est ea dolore cupidatat in labore commodo eu quis excepteur quis. Pariatur officia officia culpa magna laboris cillum fugiat incididunt esse consequat occaecat enim ullamco nostrud. Esse labore incididunt consequat minim aliquip. Duis velit do dolor aute anim laborum laboris cillum est laboris id.', time: new Date(), sender: true },
            { text: 'Consequat ad nulla aute adipisicing cillum pariatur cillum consequat consequat cupidatat ut et est.', time: new Date(), sender: false },
            { text: 'Voluptate consectetur esse quis mollit.', time: new Date(), sender: false },
            { text: 'Velit aliquip consequat consequat voluptate ea adipisicing officia consectetur enim ad cillum minim fugiat duis.', time: new Date(), sender: true },
            { text: 'Minim voluptate enim voluptate fugiat elit ea aliqua eu non est aute consequat.', time: new Date(), sender: false },
        ]);
    }, []);

    const handleSendMessage = (text: string) => {
        const message = { text: text, time: new Date(), sender: true };
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div className="chat-window" style={{ left: left }}>
            <div className="chat-window__messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender ? 'message--sended' : 'message--received'}`}>
                        <p className="message__text">{message.text}</p>
                        <small className="message__date">{message.time.toLocaleDateString()}</small>
                    </div>
                ))}
            </div>
            <ChatForm onSendMessage={handleSendMessage} />
        </div>
    );
} 