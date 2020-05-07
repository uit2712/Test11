import React from 'react';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import { Link } from 'react-router-dom';

const isThereACurrencyPrice = product => {
  try {
    return (
      <div className="price">
        {product.meta.display_price.with_tax.amount / 100}
      </div>
    );
  } catch (e) {
    return <div className="price">Price not available</div>;
  }
};

const AllProducts = props => {
  if (props.css !== null && props.products.products.data.length > 0) {
    var products = props.products.products;
    const eventCategory = 'All Products';

    return (
      <main role="main" id="container" className="main-container push">
        <section className="products">
          <div className="content">
            <div className="product-list">
              {products.data.map(function(product) {
                let background;
                if (product.background_colour) {
                  background = product.background_colour;
                } else {
                  background = '#d9d9d9';
                }

                return (
                  <Link
                    className="product-item"
                    to={'/product/' + product.id}
                    onClick={() => window.ga_onProductClick(product, eventCategory)}
                    key={product.id}>
                    <div
                      className="product-image"
                      style={{ background: background }}>
                      <ProductImage product={product} products={products} />
                    </div>
                    <div className="overlay">
                      <div
                        className="overlay-background"
                        style={{ background: '#aaaaaa' }}
                      />
                      <div className="overlay-content">
                        <div className="title">{product.name}</div>
                        {isThereACurrencyPrice(product)}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main role="main" id="container" className="main-container push">
      <section className="products">
        <div className="content">
          <p>You do not have any products</p>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = ({ products }) => ({
  products
});

export default connect(mapStateToProps)(AllProducts);
