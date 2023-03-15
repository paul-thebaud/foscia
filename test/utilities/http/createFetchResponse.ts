export default function createFetchResponse(options: Partial<Response> = {}) {
  return {
    json: (body: any) => () => Promise.resolve({
      status: 200,
      ...options,
      json: () => Promise.resolve(body),
    }),
  };
}
