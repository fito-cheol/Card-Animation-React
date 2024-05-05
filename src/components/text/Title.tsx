import * as React from 'react';

export interface ITitleProps {
  text: string;
}

export default function Title({ text }: ITitleProps) {
  return <h2>{text}</h2>;
}
