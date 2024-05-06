import React, { useState } from 'react';
import './Shine.scss';

export default function Shine({ children }: any) {
  return (
    <div className='shine_wrapper'>
      {children}
      <div className='shine'></div>
    </div>
  );
}
