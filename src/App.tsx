import React from 'react';
import './App.scoped.scss';

import PlayerCard from './components/Card/PlayerCard';

function App() {
  return (
    <div className='container'>
      <PlayerCard
        player={{
          nickName: '손흥민',
          role: 0,
          picture:
            'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT8lnTegzfhRU7K4n1y2VgQhUyVmFZWCnyNPFQnVT6Iw4ScgKoIoGPvNvmmoGTg2NSAzdAXifddiiumynE',
        }}
      />
    </div>
  );
}

export default App;
