import { useContext } from 'react';
import Context from '../../context/App.context';
import './Products.scss';

const Products = (props) => {
    const AppContext = useContext(Context)
    const { productsState, products, secondColor } = AppContext;

    return (
        <>
            { productsState && <div className='products-container'>
                <h1>OUR PRODUCTS</h1>
                <div className='products'>
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
                </div>
            </div>}
        </>
    )
}

export default Products;