import React from 'react';

export default function Rapper({ rapper, voteUp }) 
{
    const {
        id, title, description, url,
        votes, voterAvatarUrl, productImageUrl,
    } = rapper;

    const handleVoteUp = () => {
        voteUp(id);
    }

    return (
        <div className="item">
            <div className="ui medium image ">
                <img src={productImageUrl} alt="avatar" />
            </div>

            <div className="middle aligned content">
                <div className='header'>
                    <a onClick={handleVoteUp} href="#">
                        <i className='large caret up icon' />
                    </a>
                    {votes}
                </div>
                <div className="description">
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                    <p>{description}</p>
                </div>

                <div className="extra">
                    <span>Submitted By:</span>
                    <img className="ui avatar image"
                        src={voterAvatarUrl}
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    );
}