import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiElementsStylesProps {}

const StyledUiElementsStyles = styled.div`
  color: pink;
`;

export function UiElementsStyles(props: UiElementsStylesProps) {
  return (
    <StyledUiElementsStyles>
      <h1>Welcome to ui-elements-styles!</h1>
    </StyledUiElementsStyles>
  );
}

export default UiElementsStyles;
