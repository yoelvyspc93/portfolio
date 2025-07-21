import { renderWithProviders } from '@/lib/test/renderWithProviders';
import { ExperienceModal } from '..';
import { workExperiences } from '@/constants/experience';
import { screen } from '@testing-library/react';
import { ExperienceModalPage } from './ExperienceModal.test.to';

describe('ExperienceModal', () => {
  it('renders experience details', () => {
    const page = new ExperienceModalPage(
      renderWithProviders(<ExperienceModal experience={workExperiences[0]} />),
    );
    expect(page.heading).toBeInTheDocument();
  });
});
