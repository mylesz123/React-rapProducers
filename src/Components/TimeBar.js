import React from 'react';

function getTime(time) {
    if (!isNaN(time)) {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
}

function setTime(time) {
    this.player.currentTime = time;
}

function TimeBar({ currentTime, duration, setTime }) {
        const formattedCurrentTime = getTime(currentTime);
        const formattedDuration = getTime(duration);
        const sBits = [];
        let count = 0;
        while (count < duration) {
            sBits.push(count);
            count++;
        }
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
                            currentTime && Math.round(currentTime) === second
                                ? "white"
                                : "black",
                        transition: "all 0.5s ease-in-out"
                    }}
                />
            );
        });

        console.log(sBits);

        return (
            <div className="timebar">
                <div className="bar">{seconds}</div>
                {currentTime ? (
                    <div className="time">
                        {formattedCurrentTime} / {formattedDuration}
                    </div>
                ) : (
                        ""
                    )}
            </div>
        );
}


// class TimeBar extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedSong: null,
//             player: "stopped",
//             currentTime: null,
//             duration: null
//         };
//     }

//     setTime = time => {
//         this.player.currentTime = time;
//     }

//     render() {
//         // child
//         const currentTime = getTime(this.props.currentTime);
//         const duration = getTime(this.props.duration);

//         const sBits = [];
//         let count = 0;
//         while (count < duration) {
//             sBits.push(count);
//             count++;
//         }
// console.log(sBits);
//         const seconds = sBits.map(second => {
//             return (
//                 <div
//                     key={second}
//                     className="bro-wtf"
//                     onClick={() => this.setTime(second)}
//                     style={{
//                         width: `${300 / Math.round(duration)}px`,
//                         transition: "all 0.5s ease-in-out"
//                     }}
//                 />
//             );
//         });

//         return (
//             <div className="ui violet progress">
//                 <div className="bar"> {/*seconds*/} </div>
//                 {currentTime 
//                     ? (<div className="time"> {currentTime} / {duration} </div>) 
//                     : ("")
//                 }
//             </div>
//         );
//     }
// }

export default TimeBar;