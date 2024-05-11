import React, { lazy } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

import MainLayout from '@/components/layout/Main';

const Main = lazy(() => import('../pages/Main'));
const CompetitionList = lazy(() => import('../pages/Competition/List'));
const Competition = lazy(() => import('../pages/Competition'));
const CompetitionManage = lazy(() => import('../pages/Competition/Manage'));

const Team = lazy(() => import('../pages/Team/TeamPage'));
const Player = lazy(() => import('../pages/Player'));
const PlayerList = lazy(() => import('../pages/Player/List'));
const Ranking = lazy(() => import('../pages/Ranking'));
const Bracket = lazy(() => import('../pages/Bracket'));

const AdminHome = lazy(() => import('../pages/admin/Home'));
const AdminCompetition = lazy(() => import('../pages/admin/competition'));
const ParticipateTeams = lazy(() => import('../pages/admin/competition/Team'));
// const AdminCompetitionDetails = lazy(() => import('../pages/admin/competition/Details'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='main' element={<Main />} />
      <Route path='team' element={<Team />} />

      <Route path='competition'>
        <Route path=':competitionId' element={<Competition />} />
        <Route path='list' element={<CompetitionList />} />
        <Route path=':competitionId/manage' element={<CompetitionManage />} />
      </Route>

      <Route path='player'>
        <Route path=':playerId' element={<Player />} />
        <Route path='' element={<PlayerList />} />
      </Route>

      <Route path='admin'>
        <Route path='' element={<AdminHome />} />
        <Route path='competition'>
          <Route path='' element={<AdminCompetition />} />

          {/* <Route path=':competitionId' element={<AdminCompetitionDetails />} /> */}
          <Route path='participateTeams' element={<ParticipateTeams />} />
          {/* <Route path='setting' element={<AdminCompetitionDetails />} /> */}
        </Route>
      </Route>

      <Route path='ranking' element={<Ranking />} />
      <Route path='bracket' element={<Bracket />} />
      <Route path='*' element={<Navigate to='/main' replace />} />
      <Route index element={<Main />} />
    </Route>,
  ),
);

export default router;
