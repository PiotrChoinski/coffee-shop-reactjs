import './Products.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Products = (props) => {
    const AppContext = useContext(Context)
    const { productsState, productsText, products } = AppContext;

    return (
        <>
            { productsState && <div className='products-container'>
            {products.map(product => {
                return (
                <div className="offer" key={product.id}>
                    <img src={product.img} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <div className='price'>
                        <p>{product.price}zł</p>
                    </div>
                </div>)
            })};
            </div>}
        </>
    )
}

export default Products;