import RESTClient from './RESTClient/RESTClient';

const client = new RESTClient(
  `${String(process.env.REACT_APP_GLAMP_API_URL)}`,
  'glampKey',
  'v1',
  '/auth'
);

export default client;
