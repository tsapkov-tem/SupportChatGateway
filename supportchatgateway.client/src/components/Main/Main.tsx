import React, { useState } from "react";
import { ChatNav } from "./ChatNav/ChatNav"
import { ChatWindow } from "./ChatWindow/ChatWindow";
import { Resizer } from "./Resizer/Resizer";
import { ErrorBoundary } from "../ErrorBoundaries/ErrorBoundary";
import './Main.css';

const Main: React.FC = () => {
    const [chatNavWidth, setChatNavWidth] = useState<number>(250);

    const handleResize = (width: number) => {
        setChatNavWidth(width);
    };

    return (
        <main className="main">
            <div className="chat-container">
                <ErrorBoundary>
                    <ChatNav width={chatNavWidth} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Resizer onResize={handleResize} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChatWindow left={chatNavWidth} />
                </ErrorBoundary>
            </div>
        </main>
    );
}

export default Main;