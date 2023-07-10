import axios from 'axios';
import queryString from 'query-string';
import { FirmaInterface, FirmaGetQueryInterface } from 'interfaces/firma';
import { GetQueryInterface } from '../../interfaces';

export const getFirmas = async (query?: FirmaGetQueryInterface) => {
  const response = await axios.get(`/api/firmas${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFirma = async (firma: FirmaInterface) => {
  const response = await axios.post('/api/firmas', firma);
  return response.data;
};

export const updateFirmaById = async (id: string, firma: FirmaInterface) => {
  const response = await axios.put(`/api/firmas/${id}`, firma);
  return response.data;
};

export const getFirmaById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/firmas/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFirmaById = async (id: string) => {
  const response = await axios.delete(`/api/firmas/${id}`);
  return response.data;
};
