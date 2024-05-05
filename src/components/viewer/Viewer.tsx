import React, { useMemo } from 'react';
import { Grid, useTheme } from '@mui/material';
import './Viewer.scoped.scss';
type Conversation = {
  context: string;
  reply: string;
};

export interface IViewerProps {
  conversation: Conversation;
}

export function Viewer({ conversation }: IViewerProps) {
  const theme = useTheme();
  const { context, reply } = conversation;
  const { sentenses, length } = useMemo(() => {
    let sentenses: string[];
    if (context) {
      sentenses = context.split('[SEPT]');
    } else {
      sentenses = [];
    }

    const length = sentenses.length % 2;
    return { sentenses, length };
  }, [context]);
  return (
    <div className={`viewer__wrapper viewer__wrapper--${theme.palette.mode}`}>
      {sentenses.map((sentence, index) => {
        const classNames = ['viewer__text'];
        const isOdd = (index + length) % 2;
        if (isOdd) {
          classNames.push('viewer__text--left');
        } else {
          classNames.push('viewer__text--right');
        }
        classNames.push(`viewer__text--${theme.palette.mode}`);
        return (
          <Grid key={index} container justifyContent={isOdd ? 'start' : 'end'}>
            <span className={classNames.join(' ')}>{sentence}</span>
          </Grid>
        );
      })}
      {reply && (
        <Grid container justifyContent='end'>
          <span
            className={`viewer__text viewer__text--right viewer__text--highlight viewer__text--${theme.palette.mode}`}
          >
            {reply}
          </span>
        </Grid>
      )}
    </div>
  );
}
