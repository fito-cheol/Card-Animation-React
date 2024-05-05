import React, { useMemo } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import './Pagination.scoped.scss';

export interface IPaginationProps {
  total: number;
  current: number;
  onClick: (direction: number) => void;
}

export default function Pagination({ total, current, onClick }: IPaginationProps) {
  const { canClickLeft, canClickRight } = useMemo(() => {
    const canClickLeft = current > 0;
    const canClickRight = total != current + 1;
    return { canClickLeft, canClickRight };
  }, [total, current]);
  return (
    <div className='pagination'>
      <IconButton
        onClick={() => {
          onClick(-1);
        }}
        disabled={!canClickLeft}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      {current + 1} / {total}
      <IconButton
        onClick={() => {
          onClick(1);
        }}
        disabled={!canClickRight}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}
