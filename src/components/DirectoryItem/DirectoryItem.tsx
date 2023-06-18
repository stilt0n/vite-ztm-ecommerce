import { DirectoryItemProps } from './types';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainerLink,
} from './DirectoryItem.styles';

export const DirectoryItem = (props: DirectoryItemProps) => (
  <DirectoryItemContainerLink to={`/shop/${props.title.toLowerCase()}`}>
    <BackgroundImage imageurl={props.imgUrl} />
    <Body>
      <h2>{props.title}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainerLink>
);
