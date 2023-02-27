
import React from 'react';
import styled from 'styled-components';

import { IProps } from '../index';


function DefaultButton(props: IProps) {
  return(
    <button {...props}>{ props.children }</button>
  );
}

export default styled(DefaultButton)`
  display: block;
  width: 100%;
  border: none;
  border-radius: ${props => props.theme.button.border_radius};
  color: ${props => props.theme.button.mode[props?.mode ?? 'primary'].default.color};
  background: ${props => props.theme.button.mode[props?.mode ?? 'primary'].default.background};
  font-size: ${props => props.theme.button.size[props?.size ?? 'middle'].font_size};
  font-weight: ${props => String(props.theme.button.size[props?.size ?? 'middle'].font_weight)};
  padding: ${props => props.theme.button.size[props?.size ?? 'middle'].padding};
  transition: background-color ${props => props.theme.transition_duration};
  cursor: pointer;
  
  &:hover {
    background: ${props=> props.theme.button.mode[props?.mode ?? 'primary'].hover.background};
  }
  
  &:active {
    background: ${props => props.theme.button.mode[props?.mode ?? 'primary'].active.background};
  }

  &:disabled,
  &:disabled:hover {
    color: ${props => props.theme.button.disabled.color};
    background: ${props => props.theme.button.disabled.background};
    cursor: default;
  }
`;
