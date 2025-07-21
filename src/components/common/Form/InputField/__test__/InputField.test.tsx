import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { InputField } from '..';
import { screen } from '@testing-library/react';
import { InputFieldPage } from './InputField.test.to';

describe('InputField', () => {
  it('renders input with label and handles change', () => {
    const handleChange = jest.fn();
    const page = new InputFieldPage(
      renderWithProviders(
        <InputField label="Email" id="email" type="email" value="" onChange={handleChange} />,
      ),
    );
    page.input.type('hello');
    expect(handleChange).toHaveBeenCalledWith('hello');
    expect(page.input.input).toBeInTheDocument();
  });

  it('defaults to text type', () => {
    const page = new InputFieldPage(
      renderWithProviders(
        <InputField label="Name" id="name" value="" onChange={jest.fn()} />,
      ),
      'Name',
    );
    expect(page.input.input).toHaveAttribute('type', 'text');
  });
});
