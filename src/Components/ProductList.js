import React, {useEffect, useState} from 'react';
import * as rappers from "./../data/seed.js";
import Product from "./Product"
import Header from './Header'

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({ products: rappers.default});
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
        <>
            <Header title='Popular Producers' />
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        </>
        );
    }
}

// export default function ProductList(props) {


//     let [products, setProducts] = useState([]);

//     useEffect(() => {
//         setProducts({products: rappers.default})
//     });

//     /**
//      * making a reference to custom methods as an arrow function
//      * this binds the method to the component for me
//      * */
//     const handleVoteUp = (productId) => {
//         const updatedProducts = products.map(product => {
//             /**
//              * using Object.assign() to clone the original into a new object 
//              * and then modify the votes property on that new object.
//              */
//             let newProductObject = Object.assign({}, product, {
//                     votes: product.votes + 1,
//                 }
//             );

//             // let newProductObject = {...product, votes: product.votes + 1,}

//             return product.id === productId ? newProductObject : product;
//         });

//         setProducts({
//             products: updatedProducts,
//         });

//     }
//     products.map(p => console.log(p.id));

//     const sortedProductsByVote = products.sort((a, b) => (
//         b.votes - a.votes
//     ));

//     const productComponents = sortedProductsByVote.map(product => (
//         <Product
//             key={'product-' + product.id}
//             id={product.id}
//             title={product.title}
//             description={product.description}
//             url={product.url}
//             target="_blank"
//             votes={product.votes}
//             voterAvatarUrl={product.voterAvatarUrl}
//             productImageUrl={product.productImageUrl}
//             voteUp={handleVoteUp}
//         />
//     ));

//     return (
//         <>
//             <Header title='Popular Producers' />
//             <div className='ui unstackable items'>
//                 {productComponents}
//             </div>
//         </>
//     );

// };