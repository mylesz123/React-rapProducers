import React from 'react';

class Product extends React.Component {

    /**
     * Sends info back to parent (ProductList)
     * ProductList is the parent bc thats where the properties get passed in
     * ex. <Product id={product.id} />
     * */ 
    handleVoteUp = () => {
        this.props.voteUp(this.props.id);
    }

    render() {
        return (
            <div className="item">
                <div className="ui medium image ">
                    <img src={this.props.productImageUrl} alt="avatar" />
                </div>

                <div className="middle aligned content">
                    <div className='header'>
                        <a onClick={this.handleVoteUp}>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>

                    <div className="extra">
                        <span>Submitted By:</span>
                        <img className="ui avatar image"
                            src={this.props.voterAvatarUrl}
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;