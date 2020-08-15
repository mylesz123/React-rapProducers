import React, { useState } from 'react';
import { rappers } from "../data/seed.js";
import Rapper from "./Rapper";
import Header from './Header';

export default function RapperList () {
    const [state, setState] = useState(rappers);

    const handleVoteUp = (productId) => {  
        const updatedProducts = state.map(item => {
            /**
             * clone the original into a new object 
             * and then modify the votes property on that new object.
             */
            let newRapperObject = { ...item, votes: item.votes + 1 }
            return item.id === productId ? newRapperObject : item;
        });

        setState([...updatedProducts]);
    }

    const sortedRappersByVote = state.sort((a,b) => (
        b.votes - a.votes
    ));

    return (
        <>
            <Header title='Popular Producers' />
            <div className='ui unstackable items'>
                {sortedRappersByVote.map(item => (
                    <Rapper
                        key={item.id}
                        rapper={item}
                        voteUp={handleVoteUp}
                    />
                ))}
            </div>
        </>
    );
}
