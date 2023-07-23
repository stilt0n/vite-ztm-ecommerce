import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const createArgs = (buttonType: 'default' | 'inverted' | 'google') => ({
  children: [`${buttonType} button`],
  onClick: () => alert(`${buttonType} button clicked!`),
  buttonType,
});

export const DefaultButton = {
  args: createArgs('default'),
};

export const InvertedButton = {
  args: createArgs('inverted'),
};

export const GoogleButton = {
  args: createArgs('google'),
};
