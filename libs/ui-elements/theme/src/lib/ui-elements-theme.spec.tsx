import React from 'react';
import { render } from '@testing-library/react';

import UiElementsTheme from './ui-elements-theme';

describe('UiElementsTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiElementsTheme />);
    expect(baseElement).toBeTruthy();
  });
});
