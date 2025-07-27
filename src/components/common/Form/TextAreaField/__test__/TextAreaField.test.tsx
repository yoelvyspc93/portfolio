import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { TextAreaField } from '..';
import { screen } from '@testing-library/react';

describe('TextAreaField', () => {
  it('renders textarea with label', () => {
    renderWithProviders(
      <TextAreaField label="Message" id="msg" value="hi" onChange={jest.fn()} />,
    );
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });
});
