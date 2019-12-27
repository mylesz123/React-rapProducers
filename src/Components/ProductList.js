import React from 'react';

import * as products from "./../data/seed.js";
import Product from "./Product"

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({ products: products.default});
    }

    /**
     * making a reference to custom methods as an arrow function
     * this binds the method to the component for me
     * */ 
    handleVoteUp = (productId) => {  
        const updatedProducts = this.state.products.map(product => {
            /**
             * using Object.assign() to clone the original into a new object 
             * and then modify the votes property on that new object.
             */
            let newProductObject = Object.assign({}, product, {
                    votes: product.votes + 1,
                }
            );

            return product.id === productId ? newProductObject : product;
        });

        this.setState({
            products: updatedProducts,
        });
        
    }

    render() {
        const sortedProductsByVote = this.state.products.sort((a,b) => (
            b.votes - a.votes
        ));

        const productComponents = sortedProductsByVote.map(product => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                target="_blank"
                votes={product.votes}
                voterAvatarUrl={product.voterAvatarUrl}
                productImageUrl={product.productImageUrl}
                voteUp={this.handleVoteUp}
            />
        ));

        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;