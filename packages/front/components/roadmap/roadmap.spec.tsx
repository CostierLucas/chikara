import { render } from '@testing-library/react';

import Roadmap from './roadmap';

describe('Roadmap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Roadmap />);
    expect(baseElement).toBeTruthy();
  });
});
