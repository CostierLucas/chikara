import { render } from '@testing-library/react';

import Presale from './presale';

describe('Presale', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Presale />);
    expect(baseElement).toBeTruthy();
  });
});
