import { Button, ButtonGroup } from '@mui/material';
import * as React from 'react';

type Category = {
  name: string;
  value: string;
};

export interface IToggleButtonProps {
  categories: Category[];
  onClick: (value: string | null) => void;
  currentValue: string | null;
}

export default function ToggleButton({ categories, onClick, currentValue }: IToggleButtonProps) {
  return (
    <ButtonGroup>
      {categories.length > 0 && (
        <Button
          variant='outlined'
          disabled={!currentValue}
          onClick={() => {
            onClick(null);
          }}
        >
          레이블 제거
        </Button>
      )}
      {categories.map(category => {
        return (
          <Button
            key={category.value}
            onClick={() => {
              onClick(category.value);
            }}
            variant='outlined'
            disabled={category.value == currentValue}
          >
            {`${category.name} (${category.value})`}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
