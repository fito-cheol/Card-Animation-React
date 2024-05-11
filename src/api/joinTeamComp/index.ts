import customAxios from '@/api/customAxios';

type DefaultReturn = string;

export interface ListJoinTeamCompResponse {
  id: number;
  competition: Competition;
  team: Team;
  participateState: string;
}

interface AddPlayerDto {
  joinTeamCompId: number;
  playerId: number;
}

export async function addJoinTeam(data: AddPlayerDto) {
  const response = await customAxios.patch<DefaultReturn>('/joinTeamComp/addPlayers', data);
  return response.data;
}

export async function removeJoinTeam(data: AddPlayerDto) {
  const response = await customAxios.patch<DefaultReturn>('/joinTeamComp/removePlayer', data);
  return response.data;
}

// '승인' '신청' '거절'

export async function getParticipateTeams(competitionId: number | string, participateState: string = '') {
  const params = { competitionId, participateState };
  const response = await customAxios.get<ListJoinTeamCompResponse[]>(`/joinTeamComp/list`, { params });
  return response.data;
}
