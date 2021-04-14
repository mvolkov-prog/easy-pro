import styled from '@emotion/styled';
import { themeProps } from '@easydev-pro/ui-elements/theme';
import { WhiteColour, Pink100 } from '@easydev-pro/ui-elements/styles';

export const StyledButton = styled('button')<{ theme?: themeProps }>`
  color: ${WhiteColour};
  background-color: ${Pink100};
  font-family: ${(props) => props.theme.defaultFontFamily};
  padding: 8px 24px;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 16px;
  font-weight: normal;
  transition: 0.3s;
  cursor: pointer;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 4px;
  }

  svg {
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: none;

    svg {
      //fill: white;
    }
  }

  &:focus {
    outline: none;
  }
`;
