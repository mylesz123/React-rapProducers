import React from "react";

import Header from './Header'
import songsList from './../data/songs';
class RandomSongShuffle extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedSong: null,
            player: "stopped",
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedSong !== prevState) {
            let track;
           
            switch (this.state.selectedSong) {
                case "Mountains":
                    track = songsList[0].song;
                    console.log(track);
                    console.log(this.state.selectedSong);
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
            }
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

        return (
        <>
            <Header title='Music Playlist' />

            <div className="audio-player">
                <ul> {mappedSongs} </ul>
                    {/* using callback ref to use this.player */}
                    <audio ref={ref => this.player = ref} />
            </div>

            <div className="playButtons">
                <div className="ui vertical labeled icon buttons">
                    <button className="ui button">
                        <i className="pause icon"></i>
                        Pause
                </button>
                    <button className="ui button">
                        <i className="play icon"></i>
                        Play
                </button>
                    <button className="ui button">
                        <i className="shuffle icon"></i>
                        Shuffle
                </button>
                </div>
            </div>

        </>
        );
    }
}

export default RandomSongShuffle;