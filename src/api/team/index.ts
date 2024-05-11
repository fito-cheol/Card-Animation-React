import customAxios from '@/api/customAxios';

type DefaultReturn = string;

interface CreateTeamDto {
  name: string;
  location: string;
  emblem: string;
  gender: string;
}

interface ListTeamResponse {
  data: Team[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}

interface GetTeamResponse {
  player: Team;
}

export async function addTeam(data: CreateTeamDto) {
  const response = await customAxios.post<DefaultReturn>('/teams/create', data);
  return response;
}

export async function editTeam(id: number, data: CreateTeamDto) {
  const response = await customAxios.patch<DefaultReturn>(`/teams/${id}`, data);
  return response.data;
}
export async function getTeam(id: number | string) {
  const params = { id };
  const response = await customAxios.get<GetTeamResponse>('/teams/get', { params });
  return response.data;
}
export async function listTeam(page: number, itemPerPage: number) {
  const params = { page, itemPerPage };
  const response = await customAxios.get<ListTeamResponse>('/teams/list', { params });
  return response.data;
}

export async function removeTeam(id: number) {
  const response = await customAxios.delete<ListTeamResponse>(`/teams/remove, ${id}`);
  return response.data;
}
