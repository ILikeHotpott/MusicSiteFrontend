import React, {useState, useRef, useEffect} from 'react';
import {Button, Image} from "@nextui-org/react";

const DraggableBackground = ({bgSrc = "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/profile_bgp.jpeg",
                                 avatarSrc = "https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/profile/default.png",
                             bgColor = "bg-green-950",}) =>
{
    const [isDragging, setIsDragging] = useState(false);
    const [dragEnabled, setDragEnabled] = useState(false);
    const [startY, setStartY] = useState(0);
    const [initialTop, setInitialTop] = useState(0);
    const [imageTop, setImageTop] = useState(0);

    const containerRef = useRef(null);
    const imageWrapperRef = useRef(null);

    // Load saved position from localStorage
    useEffect(() => {
        const savedTop = localStorage.getItem('imageTop');
        if (savedTop !== null) {
            setImageTop(parseInt(savedTop, 10));
        }
    }, []);

    // Update the top position of the image wrapper
    useEffect(() => {
        if (imageWrapperRef.current) {
            imageWrapperRef.current.style.top = `${imageTop}px`;
        }
    }, [imageTop]);

    const handleDragToggle = () => {
        setDragEnabled(!dragEnabled);
    };

    const handleMouseDown = (e) => {
        if (dragEnabled) {
            setIsDragging(true);
            setStartY(e.clientY);
            setInitialTop(imageWrapperRef.current.offsetTop);
            imageWrapperRef.current.style.cursor = 'grabbing';
            e.preventDefault();
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && dragEnabled) {
            const dy = e.clientY - startY;
            let newTop = initialTop + dy;

            // Calculate the drag bounds
            const imageHeight = imageWrapperRef.current.clientHeight;
            const maxTop = 0;
            const minTop = -(imageHeight - (window.innerHeight * 0.55)); // Limit to imageHeight - 55vh

            // Limit dragging to the range: minTop to maxTop
            newTop = Math.max(newTop, minTop);
            newTop = Math.min(newTop, maxTop);

            setImageTop(newTop);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            imageWrapperRef.current.style.cursor = dragEnabled ? 'grab' : 'default';

            // Save position to localStorage
            localStorage.setItem('imageTop', imageWrapperRef.current.offsetTop);
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragEnabled, startY, initialTop]);

    return (
        <div ref={containerRef} className="relative bg-[#f0f0f0]">
            <div className="relative h-[55vh] overflow-hidden">
                <button
                    className={`absolute top-2 right-2 py-2 px-4 bg-blue-600 text-white border-none cursor-pointer z-10 ${dragEnabled ? 'bg-blue-800' : ''}`}
                    onClick={handleDragToggle}
                >
                    {dragEnabled ? 'Disable Drag' : 'Enable Drag'}
                </button>
                <div
                    className="absolute top-0 left-0 w-[12.5vw] h-full flex items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent"></div>
                <div
                    className="absolute top-0 right-0 w-[12.5vw] h-full flex items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent"></div>
                <div
                    ref={imageWrapperRef}
                    onMouseDown={handleMouseDown}
                    className="relative cursor-grab top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-auto"
                    style={{cursor: dragEnabled ? 'grab' : 'default'}}
                >
                    <Image
                        src={bgSrc}
                        alt="Background Image"
                        isBlurred
                        className="w-full h-auto object-cover max-w-none"
                    />
                </div>
            </div>

            <div className={`relative flex justify-center items-center h-1/4 ${bgColor}`}>
                <div className="flex w-4/5 justify-between items-center">
                    <div className="flex items-center ml-5">
                        <div
                            className="w-48 h-48 rounded-full overflow-hidden border border-gray-300 relative -top-10 left-5 z-10 inline-flex">
                            <img
                                src={avatarSrc}
                                alt="Nothing"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-black text-4xl ml-10 h-12 -mt-24">Last Whisper</span>
                    </div>
                    <div className="flex gap-2">
                        <Button color="primary" radius="full">Post</Button>
                        <Button color="default" className="bg-gray-400" radius="full">Edit</Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DraggableBackground;
