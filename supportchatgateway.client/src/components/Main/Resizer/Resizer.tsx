import React from "react";
import './Resizer.css'

interface ResizerProps {
    onResize: (width: number) => void;
}

export const Resizer: React.FC<ResizerProps> = ({ onResize }) => {

    const handleMouseDown = () => {
        const handleMouseMove = (event: MouseEvent) => {
            const newWidth = event.clientX;
            onResize(newWidth);
        }

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="resizer" onMouseDown={handleMouseDown} />
    );
}