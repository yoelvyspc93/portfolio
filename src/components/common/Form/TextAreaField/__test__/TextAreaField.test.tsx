import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { TextAreaField } from '..';
import { screen } from '@testing-library/react';
import { TextAreaFieldPage } from './TextAreaField.test.to';

describe('TextAreaField', () => {
  it('renders textarea with label', () => {
    renderWithProviders(
      <TextAreaField label="Message" id="msg" value="hi" onChange={jest.fn()} />,
    );
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = jest.fn();
    const page = new TextAreaFieldPage(
      renderWithProviders(
        <TextAreaField label="Message" id="msg" value="" onChange={handleChange} />,
      ),
    );
    page.field.type('test');
    expect(handleChange).toHaveBeenCalledWith('test');
  });
});
