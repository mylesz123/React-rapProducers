import React from "react";

import Header from './Header'
import songsList from './../data/songs';
import TimeBar from './TimeBar';
import BackgroundVid from "./BackgroundVid";

export default class RandomSongShuffle extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedSong: null,
            player: "stopped",
            currentTime: null,
            duration: null,
            isDisabled: true,
        };
    }

    componentDidMount() {
        this.player.addEventListener("timeupdate", (e) => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration,
                // isDisabled: true,
            });
        });
    }

    componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => {});
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { player, selectedSong, isDisabled } = this.state;
        const paused = player === "paused";
        const stopped = player === "stopped";
        const playing = player === "playing" && prevState.player === "paused";

        function getTrack() {
            const currentTrackIndex = songsList.findIndex(song => song.title === selectedSong);
            return songsList[currentTrackIndex].song;
        }
        
        if (selectedSong !== prevState.selectedSong) {
            let track;
                        
            switch (selectedSong) {
                case "Drank in my cup":
                    track = getTrack()
                    break;

                case "Burn It Down":
                    track = getTrack()
                    break;
            
                default:
                    break;
            }

            if (track) {
                this.player.src = track;
                this.player.play();
                this.setState({ player: "playing", isDisabled: false });
            }
        }

        if (player !== prevState.player) {
            if (playing) this.player.play();
            if (paused) this.player.pause();
            if (stopped) {
                this.player.pause();
                this.player.currentTime = 0;
                this.setState({ selectedSong: null});
                this.setState({ isDisabled: true });
            }
        }
    }

    handleSkip = direction =>  {
        const currentTrackIndex = songsList.findIndex(track => track.title === this.state.selectedSong);
        const tracksLength = songsList.length -1;

        if (direction === "previous") {
            const prevTrack = currentTrackIndex === 0 
                ? tracksLength
                : currentTrackIndex -1;
            const trackToPlay = songsList[prevTrack];
            this.setState({ selectedSong: trackToPlay.title});
        }

        else if (direction === "next") {
            const nextTrack = currentTrackIndex === tracksLength 
                ? 0
                : currentTrackIndex +1;
            const trackToPlay = songsList[nextTrack];
            this.setState({ selectedSong: trackToPlay.title});
        }
    }

    setTime = time => {
        this.player.currentTime = time;
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
        
        // const currentTime = getTime(this.state.currentTime);
        // const duration = getTime(this.state.duration);
        const { player } = this.state;

        return (
        <>
            <Header title='Music Playlist' />
            <ul> {mappedSongs} </ul>

            <TimeBar
                setTime={this.setTime}
                currentTime={this.state.currentTime}
                duration={this.state.duration}
                isDisabled={this.state.isDisabled}
            />

            {player !== "stopped" && (
                <div className="ui labeled icon buttons playButtons">
                    <button className="ui labeled icon button"
                            onClick={() => this.handleSkip("previous")}
                    >
                        <i className="left chevron icon"></i>
                        Back
                    </button>
                    
                    {player === "paused" && (
                        <button 
                            className="ui green basic button" 
                            onClick={() => this.setState({ player: "playing" })}
                        >
                            <i className="play icon"/>
                            Play
                        </button>
                    )}

                    {player === "playing" && (
                        <button 
                            className="ui purple basic button"
                            onClick={() => this.setState({ player: "paused" })}
                        >
                            <i className="pause icon"/>
                            Pause
                        </button>
                    )}

                    <button
                        className="ui red basic button"
                        onClick={() => this.setState({ player: "stopped"})}
                    >
                        <i className="stop icon" />
                        Stop
                    </button>

                    <button className="ui right labeled icon button"
                        onClick={() => this.handleSkip("next")}
                    >
                        <i className="right arrow icon"></i>
                        Next
                    </button>
                </div>
            )}

            {/* show song time */}
            {/* { player !== "stopped" && (<div> {currentTime} / {duration} </div>) } */}

            {/* callback to use this.player as ref*/}
            <audio ref={ref => this.player = ref} />
            <div className="background-video">
                <BackgroundVid 
                    isDisabled={this.state.isDisabled}
                />
            </div>
        </>
        );
    }
}