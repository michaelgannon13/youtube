import { Product } from '../Product/Product';
import './productList.css';
import { products } from '../../data/products';

export const ProductList = () => {

    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & Inspire
                </h1>
                <p className="pl-description">
                    Some of the projects I've worked on
                </p>
            </div>
            <div className="pl-list">
             {/* es6 map and passing down props */}
             { products.map((product) => (
                //  pass in parameters
                <Product key={product.id} id={product.id} name={product.name} />
             ))}
            </div>
        </div>
    )
}
