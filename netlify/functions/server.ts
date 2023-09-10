import { server } from '../../dist/src/main';

export const handler = async (event: any, context: any) => {
  const result = await server(event, context);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
