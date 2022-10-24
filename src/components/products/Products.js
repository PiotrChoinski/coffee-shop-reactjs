import './Products.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Products = (props) => {
    const AppContext = useContext(Context)
    const { productsState, products, secondColor } = AppContext;

    return (
        <>
            { productsState && <div className='products-container'>
            {products.map(product => {
                return (
                <div className={`offer theme--${secondColor}`} key={product.id}>
                    <img src={product.img} alt={product.name}/>
                    <h2>{product.name}</h2>
                    <div className='price'>
                        <p className={product.newPrice ? 'promo' : ''}>{product.price}</p>
                        <p>{product.newPrice}zł</p>
                    </div>
                </div>)
            })};
            </div>}
        </>
    )
}

export default Products;