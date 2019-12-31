import React from "react";

import Header from './Header'
import songsList from './../data/songs';

function getTime(time) {
    if (!isNaN(time)) {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
}
class RandomSongShuffle extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedSong: null,
            player: "stopped",
            currentTime: null,
            duration: null
        };
    }

    componentDidMount() {
        this.player.addEventListener("timeupdate", (e) => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            });
        });
    }

    componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => {});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedSong !== prevState.selectedSong) {
            let track;
            
            switch (this.state.selectedSong) {
                case "Mountains":
                    track = songsList[0].song
                    break;

                case "Burn It Down":
                    track = songsList[1].song
                    break;
            
                default:
                    break;
            }

            if (track) {
                this.player.src = track;
                this.player.play();
                this.setState({ player: "playing" });
            }
        }

        const paused = this.state.player === "paused";
        const stopped = this.state.player === "stopped";
        const playing = this.state.player === "playing" && prevState.player === "paused";

        if (this.state.player !== prevState.player) {
            if (paused) this.player.pause();
            else if (stopped) {
                this.player.pause();
                this.player.currentTime = 0;
                this.setState({ selectedSong: null});
            }
            else if (playing) this.player.play();
        }
    }

    render () {
        const mappedSongs = songsList.map(song => {
            return (
                <li
                    key={song.id}
                    onClick={() => this.setState({ selectedSong: song.title})}
                >
                    {song.title}
                </li>
            );
        });
        
        const currentTime = getTime(this.state.currentTime);
        const duration = getTime(this.state.duration);

        return (
        <>
            <Header title='Music Playlist' />
            <ul> {mappedSongs} </ul>
    
            <div className="ui labeled icon buttons playButtons">
                
                {this.state.player === "paused" && (
                    <button 
                        className="ui green basic button" 
                        onClick={() => this.setState({ player: "playing" })}
                    >
                        <i className="play icon"/>
                        Play
                    </button>
                )}

                {this.state.player === "playing" && (
                    <button 
                        className="ui purple basic button"
                        onClick={() => this.setState({ player: "paused" })}
                    >
                        <i className="pause icon"/>
                        Pause
                    </button>
                )}

                {this.state.player === "playing" || this.state.player === "paused" ? (
                    <button 
                        className="ui red basic button"
                        onClick={() => this.setState({ player: "stopped" })}
                    >
                        <i className="stop icon"/>
                        Stop
                    </button>
                ) : (
                    ""
                )}
            </div>

            {this.state.player === "playing" || this.state.player === "paused" 
            ? (<div> {currentTime} / {duration} </div>) 
            : ("")
            }

            {/* callback to use this.player as ref*/}
            <audio ref={ref => this.player = ref} />
        </>
        );
    }
}

export default RandomSongShuffle;