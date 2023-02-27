
import { domain } from 'kernel';

import numeral from '@package/numeral';
import { Header, Text, Button } from '@library/kit';

import React from 'react';
import styled from 'styled-components';

import noImage from './img/no-image.png';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  text-decoration: none;
  border-radius: 8px;
  background: ${props => props.theme.color.grayLight};
  outline: none;
  box-shadow: 0 4px 16px 0 #00000026;
  overflow: hidden;
`;

const _Image = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  background: ${props => props.theme.color.gray};
`;

const _img = styled.img`
  display: block;
  height: 100%;
  margin: auto;
`;

const _Content = styled.div`
  display: block;
  padding: 8px;
`;

const _Title = styled.div`
  display: block;
`;

const _Control = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0;
  align-items: center;
  margin: 4px 0 0;
`;

const _Price = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;

const _Cart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;


interface IProps {
  inCart: boolean;
  product: domain.Product.IProduct;
  onAddToCart(product: domain.Product.IProduct): void;
}


function TabBar(props: IProps) {
  function handleAddToCart() {
    props.onAddToCart(props.product);
  }

  return (
    <_Wrapper>
      <_Image>
        <_img src={noImage} alt={'No image'} />
      </_Image>
      <_Content>
        <_Title>
          <Text>{ props.product.title }</Text>
        </_Title>
        <_Control>
          <_Price>
            <Header level={3}>{ numeral(props.product.price).format() } руб.</Header>
          </_Price>
          <_Cart>
            <Button mode={props.inCart ? 'success' : 'primary'} onClick={handleAddToCart}>Купить</Button>
          </_Cart>
        </_Control>
      </_Content>
    </_Wrapper>
  );
}

export default TabBar;
