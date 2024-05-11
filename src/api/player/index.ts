import customAxios from '@/api/customAxios';

type DefaultReturn = string;

interface CreatePlayerDto {
  nickName: string;
  picture?: string;
  uniformNumber?: number;
  teamId: number;
}

interface UpdatePlayerDto {
  nickName: string;
  picture?: string;
  uniformNumber?: number;
  role: number;
}

interface ListPlayerResponse {
  data: Player[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}

interface GetPlayerResponse {
  player: Player;
}

export async function addPlayer(data: CreatePlayerDto) {
  const response = await customAxios.post<DefaultReturn>('/players/create', data);
  return response;
}

export async function editPlayer(id: number, data: UpdatePlayerDto) {
  const response = await customAxios.patch<DefaultReturn>(`/players/${id}`, data);
  return response;
}
export async function getPlayer(id: number | string) {
  const params = { id };
  const response = await customAxios.get<GetPlayerResponse>('/players/get', { params });
  return response.data;
}
export async function listPlayer(page: number) {
  const params = { page };
  const response = await customAxios.get<ListPlayerResponse>('/players/list', { params });
  return response.data;
}

export async function removePlayer(id: number) {
  const response = await customAxios.delete<ListPlayerResponse>(`/players/delete, ${id}`);
  return response;
}
