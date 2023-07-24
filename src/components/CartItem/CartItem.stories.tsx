import { StoryObj, Meta } from '@storybook/react';
import { CartItem } from './CartItem';

const meta: Meta = {
  title: 'Example/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const CartItemExample: StoryObj<typeof CartItem> = {
  render: () => (
    <div style={{ width: 240, height: 240 }}>
      <CartItem
        item={{
          id: 1,
          name: 'Example Item',
          price: 25,
          quantity: 3,
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        }}
        onRemove={() => alert('On remove called!')}
      />
    </div>
  ),
};
