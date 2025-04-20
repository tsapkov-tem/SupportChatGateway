import React, { useEffect, useState } from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        setName("Александр Иванов");
    }, []);

    return (
        <footer className="footer">
            <span className="footer__username">{name}</span>
            <button onClick={() => setName("Пётр Петров")} className="footer__button">↺</button>
        </footer>
    );
}