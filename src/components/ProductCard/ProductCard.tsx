import { ProductCardProps } from './types';
import { Button } from '../Button';
import { useCartContext } from '../../contexts/CartContext';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles';

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, imageUrl } = props.product;
  const { cartDispatch } = useCartContext();
  const addProductToCart = () =>
    cartDispatch({ type: 'ADD_ITEM', payload: props.product });
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
