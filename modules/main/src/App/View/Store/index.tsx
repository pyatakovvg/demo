
import { services, application, domain } from 'kernel';

import { Product } from '@library/design';

import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  display: block;
  padding: 32px 32px 72px;
`;

const _Item = styled.div`
  display: block;
  
  & + & {
    margin: 32px 0 0;
  }
`;



function Content() {
  const { cookies, cart } = services.store.useStore();
  const { addToCart } = application.addToCart.useAddToCart();
  const {  } = application.orderProducts.useOrderProducts();

  function handleAddToCart(product: domain.Product.IProduct) {
    addToCart(product);
  }

  return (
    <_Wrapper>
      {cookies.map((product: domain.Product.IProduct) => (
        <_Item key={product.id}>
          <Product
            inCart={domain.Cart.hasProduct(cart, product)}
            product={product}
            onAddToCart={handleAddToCart}
          />
        </_Item>
      ))}
    </_Wrapper>
  );
}

export default Content;
