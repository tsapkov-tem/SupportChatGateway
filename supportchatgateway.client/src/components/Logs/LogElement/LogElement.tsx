import React, { useState } from "react";
import { Log } from "../../../types/Log";
import "./LogElement.css";

interface LogElementProps {
    log: Log;
}

export const LogElement: React.FC<LogElementProps> = ({ log }) => {
    const [isDetailed, setDetailed] = useState(false);


    const renderStars = (stars: number) => {
        return "★".repeat(stars) + "☆".repeat(5 - stars);
    };

    const getCodeText = (code: string) => {
        console.log(code);
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    }

    return (
        <li className="log-element" key={log.id}>
            <h2 className="log-element__username">{log.supportName}</h2>
            <p className={`log-element__code-details ${isDetailed ? "active" : ""}`}>{getCodeText(log.code)}</p>
            <p className="log-element__details">
                <span className="log-element__role">{log.supportType}</span>
                <button onClick={() => setDetailed(!isDetailed)} className="log-element__code">{log.code}</button>
                <span className={`log-element__evaluation star-${log.problemEvaluation}`}>{renderStars(log.problemEvaluation)}</span>
            </p>
        </li>
    );
}