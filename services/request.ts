export default async function request(
  url: string,
  data: any,
  method = 'POST',
): Promise<any> {
  const response = await fetch(`/api/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
}
