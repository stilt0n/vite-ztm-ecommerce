import { ProductCardProps } from './types';
import { Button } from '../Button';
import { useCartContext } from '../../contexts/CartContext';
import styles from './ProductCard.module.scss';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles';

export const ProductCard = (props: ProductCardProps) => {
  const { name, price, imageUrl } = props.product;
  const { addItemToCart } = useCartContext();
  const addProductToCart = () => addItemToCart(props.product);
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
