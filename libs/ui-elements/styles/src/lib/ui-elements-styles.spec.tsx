import React from 'react';
import { render } from '@testing-library/react';

import UiElementsStyles from './ui-elements-styles';

describe('UiElementsStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiElementsStyles />);
    expect(baseElement).toBeTruthy();
  });
});
