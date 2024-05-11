/* 
  권한 나누기(role)
  - 유저, 대회 관리자, 개발자 전용
  - NU - Normal User: 자신의 팀, 대회 생성 외의 모든 서비스를 이용할 수 있다.
  - CA - Competition Admin: 대회를 생성할 수 있는 권한만 있다.

  - 일반유저는 대회를 생성할 수 없다. 대회를 만들고 싶으면 대회 관리자 계정을 새로 만들어야 한다.
    대회 참가비랑 이런것들이 있어서 아무나 막 만들게 해주면 안될 것 같다.
*/

import ShieldIcon from '@mui/icons-material/Shield';
import PersonOutline from '@mui/icons-material/PersonOutline';
import StadiumIcon from '@mui/icons-material/Stadium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import ScoreboardIcon from '@mui/icons-material/Scoreboard';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import SettingsIcon from '@mui/icons-material/Settings';

export const authByRoute = {
  NU: [
    { url: '/team', name: '팀', icon: <ShieldIcon /> },
    { url: '/competition/list', name: '대회', icon: <StadiumIcon /> },
    { url: '/player', name: '선수', icon: <PersonOutline /> },
    { url: '/ranking', name: '랭킹', icon: <EmojiEventsIcon /> },
    { url: '/bracket', name: '대진표', icon: <CalendarMonthIcon /> },
  ],
  CA: [
    { url: '/admin/competition/participateTeams', name: '참가 팀', icon: <ShieldIcon /> },
    // { url: '/admin/competition/bracket', name: '대진표', icon: <EmojiEventsIcon /> },
    // { url: '/matchReport', name: '경기기록', icon: <ScoreboardIcon /> },
    // { url: '/ranking', name: '랭킹', icon: <BarChartIcon /> },
    // { url: '/admin/competition/setting', name: '설정', icon: <SettingsIcon /> },
  ],
};
