import React from "react";

import Header from './Header'

class RandomSongShuffle extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
        <>
            <Header title='Music Playlist' />

            <div className="audio-player">

                <audio />
            </div>

            <div className="playButtons">
                <div class="ui vertical labeled icon buttons">
                    <button class="ui button">
                        <i class="pause icon"></i>
                        Pause
                </button>
                    <button class="ui button">
                        <i class="play icon"></i>
                        Play
                </button>
                    <button class="ui button">
                        <i class="shuffle icon"></i>
                        Shuffle
                </button>
                </div>
            </div>

        </>
        );
    }
}

export default RandomSongShuffle;