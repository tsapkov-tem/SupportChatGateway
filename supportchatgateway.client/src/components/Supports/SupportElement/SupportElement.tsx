import React, { useState } from "react";
import { Support } from "../../../types/Support";
import './SupportElement.css'

interface SupportElementProps {
    support: Support;
}

export const SupportElement: React.FC<SupportElementProps> = ({ support }) => {
    const [status, setStatus] = useState(support.supportStatus);

    return (
        <li className="support-element">
            <p className="support-element__details">
                <span className="support-element__name">{support.supportName}</span>
                <span className="support-element__lastname">{support.supportLastName}</span>
                <span className={`support-element__status status-${status}`}></span>
            </p>
            <p className="support-element__type">
                {support.supportType}
            </p>
        </li>
    );
}