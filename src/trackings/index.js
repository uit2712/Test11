import ga from 'react-ga';

export function ga_onProductClick(product) {
    if (!product)
      return;
    ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      price: product.price[0].amount,
      // currency: product.price[0].currency,
      category: product.relationships.categories.data[0].id,
    });

    ga('ec:setAction', 'click', {
      'list': 'View detail'
    });
}