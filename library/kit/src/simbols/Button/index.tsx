
import React from 'react';

import TMode from "@typing/mode";
import TSize from "@typing/size";

import Default from './Default';


export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: TMode;
  size?: TSize;
}


function Factory({ form, ...props }: IProps) {
  switch (form) {
    default: return <Default {...props} />;
  }
}

export default Factory;
