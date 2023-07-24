import { StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['default', 'inverted', 'google'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const ButtonExample: StoryObj<typeof Button> = {
  render: (args) => {
    const { buttonType } = args;
    return (
      <Button
        buttonType={buttonType}
        onClick={() => alert('button clicked!')}
      >{`${buttonType} button`}</Button>
    );
  },
  args: {
    buttonType: 'default',
  },
};
