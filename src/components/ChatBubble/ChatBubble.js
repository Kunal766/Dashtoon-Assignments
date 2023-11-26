import { useState } from 'react';
import './ChatBubble.css';

const ChatBubble = ({ massage }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.left,
            y: e.clientY - position.top,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.clientX - offset.x;
        const y = e.clientY - offset.y;

        setPosition({ top: y, left: x });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="chat-bubble"
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="chat-bubble-content">
                {massage}
            </div>
        </div>
    );
};

export default ChatBubble;
