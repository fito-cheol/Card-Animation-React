import customAxios from 'api/customAxios';

type DefaultReturn = string;

interface DefaultObjectReturn {
  success: boolean;
  message: string;
}
interface GetCountParam {
  heroName: string | null;
  searchText: string;
}

export async function getTotalCount(data: GetCountParam) {
  const response = await customAxios.get<ReturnCount>('/post/totalCount', { params: data });
  return response.data;
}
