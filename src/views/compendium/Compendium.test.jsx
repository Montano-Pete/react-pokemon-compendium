import { screen, render } from '@testing-library/react';
import Compendium from './Compendium';

it('should render a loading screen', () => {
  render(<Compendium />);
  const loading = screen.getByText(/Loading../i);
  expect(loading).toBeInTheDocument();
});
