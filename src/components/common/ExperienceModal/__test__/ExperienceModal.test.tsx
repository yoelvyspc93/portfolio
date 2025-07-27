import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ExperienceModal } from '..';
import { workExperiences } from '@/constants/experience';
import { screen } from '@testing-library/react';

describe('ExperienceModal', () => {
  it('renders experience details', () => {
    renderWithProviders(<ExperienceModal experience={workExperiences[0]} />);
    expect(screen.getByText(workExperiences[0].period)).toBeInTheDocument();
  });
});
