import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import './PlayerCard.scss';
import Glow from '../animation/Glow';
import React from 'react';

interface Props {
  player?: Player;
}

// https://kagrin97-blog.vercel.app/react/Dynamic3DParallax%20Effect

export default function PlayerCard({ player }: Props) {
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const rotateX = -offsetY / 5; // Adjust the division value for sensitivity
    const rotateY = offsetX / 3;

    setRotation({ x: rotateX, y: rotateY });
  }
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className='container'>
      {/* <div
        className='container'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `perspective(450px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        <div className='overlay overlay--line' style={{ backgroundPosition: (rotation.x + rotation.y) * 2 }} /> */}
      <Glow>
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
      </Glow>
      {/* </div> */}
    </div>
  );
}
