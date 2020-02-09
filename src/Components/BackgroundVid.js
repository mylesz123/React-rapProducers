import React, { useState, useRef, useEffect } from 'react'

export default function BackgroundVid({isDisabled}) {

    const video = useRef();

    const handleVideoDisplay = (bool) => {
        return bool === true ? 0 : 1;
    }

    return (
        <video
            ref={video}
            autoPlay
            muted
            loop
            style={{
                // position: "fixed",
                width: "100%",
                left: 0,
                top: 0,
                opacity: handleVideoDisplay(isDisabled),
                transition: "opacity, 0.7s ease-in-out"
            }}
        >
            <source src="videos/Glowing.mp4" type="video/mp4"></source>
        </video>
    )
}
