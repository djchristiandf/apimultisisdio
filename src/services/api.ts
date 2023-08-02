import axios from 'axios';

const BASE_URL = 'https://sisdio.tools.i9partner.com.br';

interface paramaters {
  label: string;
  value: string
}

export const authenticate = async (username: string, password: string) => {
  const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
  const response = await axios.get(`${BASE_URL}/veiculos/relatorio/posicoes`, {
    headers: {
      Authorization: `Basic bm92YWNhcDo5IXYkZWY3KEsqV0REdUNFTFBGOHJ6Iyhx`,
    },
  });
  return response.data;
};

export const searchPositions = async (startDate: string, endDate: string, identification: string, page: number) => {
  const params = buildQueryParams(
    { label: 'inicio', value: startDate },
    { label: 'fim', value: endDate },
    { label: 'identification', value: identification },
    { label: 'pagina', value: '1' },
    { label: 'limite', value: '10' },
  );

  const response = await axios.get(`${BASE_URL}/veiculos/relatorio/posicoes`, {
    params,
    auth: {
      username: '', // TODO: PUT username and password
      password: ''
    }
  });

  return response.data;
};

const buildQueryParams = (...paramters: paramaters[]) => {
  const urlParams = new URLSearchParams();  
  
  for (const param of paramters) {
    if (!param?.value) continue;
    urlParams.append(param.label, param.value);
  }

  return urlParams;
} 