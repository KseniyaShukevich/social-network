import MessageResponse from '../interfaces/MessageResponse';
import UserResponse from '../interfaces/UserResponse';

export default async function request(
  url: string,
  data: any,
  method = 'POST'
): Promise<UserResponse | MessageResponse> {
  const response = await fetch(`/api/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
