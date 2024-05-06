import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import './PlayerCard.scss';
import Glow from '../animation/Glow';
import React from 'react';
import Rotator from '../animation/Rotator';
import Line from '../animation/Line';
import useMouse from '../../hooks/useMouse';

interface Props {
  player?: Player;
}

// https://kagrin97-blog.vercel.app/react/Dynamic3DParallax%20Effect

export default function PlayerCard({ player }: Props) {
  const { rotation, position, handleMouseMove, handleMouseLeave, dynamicStyles } = useMouse();

  return (
    <div className='container' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Rotator rotationProps={rotation}>
        <Glow positionProps={position} dynamicStylesProps={dynamicStyles}>
          <Line rotationProps={position}>
            <Card
              sx={{
                width: 250,
                height: 400,
                backgroundImage: `url("${player?.picture}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <CardContent>
                <Grid container>
                  <Grid xs={3}>
                    <Typography variant='subtitle2' color='text.secondary'>
                      이름
                    </Typography>
                  </Grid>
                  <Grid xs={9}>
                    <Typography variant='body2' color='text.secondary'>
                      {player?.nickName || '김축구'}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size='small' variant='contained' color='primary'>
                  수정
                </Button>
              </CardActions>
            </Card>
          </Line>
        </Glow>
      </Rotator>
    </div>
  );
}
