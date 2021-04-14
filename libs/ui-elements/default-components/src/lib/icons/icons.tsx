import React from 'react';
import styled from '@emotion/styled';
import { themeProps } from '@easydev-pro/ui-elements/theme';

type IconsProps = {
  width: string;
  height: string;
  fill: string;
  viewBox: string;
};

const StyledIcon = styled('div')<{ theme?: themeProps, iconConfig?: IconsProps }>`
  width: ${(props) => (props.iconConfig && (props.iconConfig.width || '15'))}px;
  height: ${(props) => (props.iconConfig && (props.iconConfig.height || '15'))}px;
  transition: 0.3s;
  fill: ${(props) => (props.iconConfig && (props.iconConfig.fill || props.theme.iconsDefaultColour))};
`;

export const PlusIcon = ({
  ...props
}: IconsProps) => (
  <StyledIcon { ...props } /* viewBox="0 0 24 24" */>
    <path d="M7 1V7M7 13V7M7 7H13M7 7H1"/>
  </StyledIcon>
);
