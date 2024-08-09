import React, {useEffect, useRef, useState} from 'react';
import './index.css';

const image_samples =
[
    "https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa",
    "https://i.scdn.co/image/ab67616d0000b273e5a25ed08d1e7e0fbb440cef",
    "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
    "https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7",
    "https://i.scdn.co/image/ab67616d0000b273d441b2e9b63f0b9f9d90be19",
    "https://i.scdn.co/image/ab67616d0000b2737c68face1dc58127f3a7b1cc",
    "https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2",
    "https://i.scdn.co/image/ab67616d0000b2734973a7d9304de53e18583220",
    "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
    "https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9"
]

const ScrollGallery = ({images = image_samples, speed = 1.5, direction = "left", size = 230, margin = 10}) => {
    const [offset, setOffset] = useState(0);
    const galleryRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (galleryRef.current) {
                const width = galleryRef.current.scrollWidth / 2; // width of the duplicated content
                setOffset((prevOffset) => {
                    const newOffset = prevOffset + (direction === 'right' ? speed : -speed);
                    // Ensure the offset stays within the bounds of the content width to avoid the blank space
                    if (newOffset <= -width) {
                        return 0;
                    } else if (newOffset >= 0) {
                        return -width;
                    }
                    return newOffset;
                });
            }
        };

        const intervalId = setInterval(handleScroll, 16); // roughly 60fps
        return () => clearInterval(intervalId);
    }, [speed, direction]);

    return (
        <div className="gallery-wrapper">
            <div
                className="gallery"
                ref={galleryRef}
                style={{transform: `translateX(${offset}px)`}}
            >
                {images.concat(images).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index}`}
                        style={{
                            height: `${size}px`,
                            width: `${size}px`,
                            marginLeft: `${margin}px`,
                            borderRadius: '0.75rem'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScrollGallery;
