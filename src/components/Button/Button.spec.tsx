import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { Button } from './Button';

describe('Basic tests', () => {
  it('calls onClick when button is clicked', () => {
    const mockOnClick = vi.fn();
    const { getByRole } = render(<Button onClick={mockOnClick} />);
    const btn = getByRole('button');
    btn.click();
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
