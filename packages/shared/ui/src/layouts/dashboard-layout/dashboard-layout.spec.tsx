import { render } from '@testing-library/react';

import AuthLayout from './dashboard-layout';

describe('AuthLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthLayout />);
    expect(baseElement).toBeTruthy();
  });
});
