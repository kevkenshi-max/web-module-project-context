import React, { useContex } from 'react';

import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	const { products } = useContex(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
