import customAxios from '@/api/customAxios';

type DefaultReturn = string;

interface CreateTournamentDto {
  competitionId: string;
  numberOfTeam: string;
}
interface GetTournamentListResponse extends Competition {
  tournaments: TournamentNode[];
}

export async function createTournament(data: CreateTournamentDto) {
  const response = await customAxios.post<DefaultReturn>('/tournaments/create', data);
  return response.data;
}

export async function getTournamentList(competitionId: number | string) {
  const params = { competitionId };
  const response = await customAxios.get<GetTournamentListResponse>('/tournaments/list', { params });
  return response.data;
}
