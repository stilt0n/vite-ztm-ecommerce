import { CategoryPreviewProps } from './types';
import { ProductCard } from '../ProductCard';
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from './CategoryPreview.styles';

export const CategoryPreview = (props: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink
          title={`See more ${props.title}`}
          to={`/shop/${props.title}`}
        >
          {props.title.toUpperCase()}
        </TitleLink>
      </h2>
      <Preview>
        {props.products.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
