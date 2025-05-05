import React, { useState, useEffect } from "react";
import { Chat } from "../../../types/Chat";
import './ChatNav.css'

interface ChatNavProps {
    width: number;
}

export const ChatNav: React.FC<ChatNavProps> = ({ width }) => {
    const [chats, setChats] = useState<Chat[]>([]);
    useEffect(() => {
        setChats([
            { id: "1", name: 'Chat1', lastMessage: 'Lorem ad exercitation id deserunt in fugiat eu id elit.' },
            { id: "2", name: 'Chat2', lastMessage: 'Adipisicing id qui adipisicing culpa cupidatat esse aliquip laborum aliquip elit excepteur est commodo qui.' },
            { id: "3", name: 'Chat3', lastMessage: 'Eiusmod eiusmod sit sit labore consequat nulla laborum irure non dolore ea officia veniam anim.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
            { id: "4", name: 'Chat4', lastMessage: 'Et aliquip est aliqua sunt incididunt culpa occaecat eiusmod magna labore sint.' },
        ]);
    }, []);

    return (
        <aside className="chat-nav" style={{ width: width }}>
            <ul className="chat-nav__chats">
                {chats.map((chat) => (
                    <li className="chat" key={chat.id}>
                        <p className="chat__name">{chat.name}</p>
                        <p className="chat__message">{chat.lastMessage}</p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}