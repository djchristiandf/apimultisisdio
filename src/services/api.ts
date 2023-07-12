import axios from 'axios';

const BASE_URL = 'https://sisdio.tools.i9partner.com.br';

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
  const response = await axios.get(`${BASE_URL}/veiculos/relatorio/posicoes`, {
    params: {
      inicio: startDate,
      fim: endDate,
      identificacao: identification,
      pagina: page,
      limite: 10,
    },
  });
  return response.data;
};
