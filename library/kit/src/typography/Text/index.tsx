
import React from 'react';

import Default from './Default';


export interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type?: 'default' | undefined;
  children: React.ReactElement | React.ReactNode;
}


function TextFactory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <Default {...rest}>{ rest.children }</Default>;
  }
}

export default TextFactory;
