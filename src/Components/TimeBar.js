import React from 'react';

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

    const seconds = sBits.map(second => {
        return (
            <div
                className=""
                key={second}
                onClick={() => setTime(second)}
                style={{
                    float: "left",
                    cursor: "pointer",
                    height: "30px",
                    width: `${300 / Math.round(duration)}px`,
                    background:
                        currentTime && Math.round(currentTime) >= second
                            ? "violet"
                            : currentTime !== 0 ? "rgba(0, 0, 0, .1)" : "white", //could be random colors 👀
                    transition: "all 0.2s ease-in-out",
                    borderRadius: ".28571429rem",
                    pointerEvents: turnTimeBarOff(isDisabled),
                }}
            />
        );
    });

    return (
        <div className="time-bar">
            <div className="seconds">{seconds}</div>
            {currentTime
            ? ( <div className="song-duration">
                    {formattedCurrentTime} / {formattedDuration}
                </div>
            )
            : ("")}
        </div>
    );
}
