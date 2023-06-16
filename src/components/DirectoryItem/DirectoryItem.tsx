import { DirectoryItemProps } from './types';
import styles from './DirectoryItem.module.scss';
import { Link } from 'react-router-dom';

export const DirectoryItem = (props: DirectoryItemProps) => (
  <Link
    className={styles['directory-item-container']}
    to={`/shop/${props.title.toLowerCase()}`}
  >
    <div
      className={styles['background-image']}
      style={{
        backgroundImage: `url(${props.imgUrl})`,
      }}
    />
    <div className={styles['body']}>
      <h2>{props.title}</h2>
      <p>Shop Now</p>
    </div>
  </Link>
);
