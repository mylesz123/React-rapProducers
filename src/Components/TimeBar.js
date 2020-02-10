import React from 'react';
import colors from './../data/colors';

function getTime(time) {
    if (!isNaN(time)) {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
}

export default function TimeBar({ currentTime, duration, setTime, isDisabled }) {
    const formattedCurrentTime = getTime(currentTime);
    const formattedDuration = getTime(duration);
    const sBits = [];
    let count = 0;
    while (count < duration) {
        sBits.push(count);
        count++;
    }

    const turnTimeBarOff = (bool) => {
        return bool === true ? "none" : "auto";
    }

    const randomNumber = Math.floor(Math.random() * colors.length);
    const getRandomColor = colors[randomNumber];

    const seconds = sBits.map(second => {
        return (
            <div
                key={second}
                onClick={() => setTime(second)}
                style={{
                    float: "left",
                    cursor: "pointer",
                    height: "30px",
                    width: `${300 / Math.round(duration)}px`,
                    background:
                        currentTime && Math.round(currentTime) >= second
                            ? getRandomColor
                            : currentTime !== 0 ? "rgba(0, 0, 0, .1)" : "white",
                    transition: "all 0.2s ease-in-out",
                    pointerEvents: turnTimeBarOff(isDisabled),
                }}
            />
        );
    });

    return (
        <>
            <div className="seconds"> {seconds} </div>
            {/* <br/> */}
            <div className="timebar" style={{
                maxWidth: "fit-content",
            }}>
                {currentTime
                    ? (<div> {formattedCurrentTime} / {formattedDuration} </div>)
                    : ("")
                }
            </div>
        </>
    );
}
