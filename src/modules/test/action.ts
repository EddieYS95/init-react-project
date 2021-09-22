import { request } from '@utils/request';

async function postList(): Promise<string> {
  const response = await request.post<string>('postList');
  return response.data;
}

export { postList };
