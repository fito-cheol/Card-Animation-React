import * as React from 'react';

export interface IDescriptionProps {
  text: string;
}

export default function Description({ text }: IDescriptionProps) {
  return <span>{text}</span>;
}
