import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import CheckoutContainer from './Checkout/CheckoutContainer';
import StylesContainer from './Styles/StylesContainer';
import ProductsContainer from './Products/ProductsContainer';
import SingleProductContainer from './Products/SingleProductContainer';
import OneClickCheckout from './Checkout/OneClickCheckout';
import OrderConfirmationContainer from './Orders/OrderConfirmationContainer';
import NotFound from './global/NotFound';
import Footer from './global/Footer';


function App(props) {
  const currentPath = props.location ? props.location.pathname : '';
  return (
  <div>
    <Switch>
      <Route exact path={`${currentPath}/`} component={Home} />
      <Route path={`${currentPath}/cart`} component={Cart} />
      <Route path={`${currentPath}styles`} component={StylesContainer} />
      <Route path={`${currentPath}/products`} component={ProductsContainer} />
      <Route path={`${currentPath}/checkout`} component={CheckoutContainer} />
      <Route
        path={`${currentPath}/order-confirmation`}
        component={OrderConfirmationContainer}
      />
      <Route path={`${currentPath}/product/:id`} component={SingleProductContainer} />
      <Route
        path={`${currentPath}/one-click-checkout/:productId`}
        component={OneClickCheckout}
      />
      <Route path="*" component={NotFound} />
    </Switch>

    <Footer />
  </div>)
};

export default App;
