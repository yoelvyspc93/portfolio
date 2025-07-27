import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { InputField } from '..';
import { screen } from '@testing-library/react';

describe('InputField', () => {
  it('renders input with label', () => {
    const handleChange = jest.fn();
    renderWithProviders(
      <InputField label="Email" id="email" type="email" value="" onChange={handleChange} />,
    );
    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();
  });
});
