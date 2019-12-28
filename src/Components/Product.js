import React from 'react';

class Product extends React.Component {

    /**
     * Sends info back to parent (ProductList)
     * ProductList is the parent bc thats where the properties get passed in
     * ex. <Product id={product.id} />
     * */ 
    handleVoteUp = () => {
        const product = this.props;
        product.voteUp(product.id);
    }

    render() {
        const product = this.props;
        return (
            <div className="item">
                <div className="ui medium image ">
                    <img src={product.productImageUrl} alt="avatar" />
                </div>

                <div className="middle aligned content">
                    <div className='header'>
                        <a onClick={this.handleVoteUp}>
                            <i className='large caret up icon' />
                        </a>
                        {product.votes}
                    </div>
                    <div className="description">
                        <a href={product.url} target="_blank" rel="noopener noreferrer">{product.title}</a>
                        <p>{product.description}</p>
                    </div>

                    <div className="extra">
                        <span>Submitted By:</span>
                        <img className="ui avatar image"
                            src={product.voterAvatarUrl}
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;