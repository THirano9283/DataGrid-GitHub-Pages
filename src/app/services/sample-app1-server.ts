import { FetchApi } from './fetch-api';
import { Product } from '../models/SampleApp1Server/product';

const API_ENDPOINT = 'https://doughnut-shop-demo1-api.azurewebsites.net';

export async function getProductList(): Promise<Product[]> {
  return await FetchApi.fetchApiResponse<Product[]>(`${API_ENDPOINT}/products`, []);
}

export async function postProduct(data: any): Promise<Product | undefined> {
  if (!data) {
    return Promise.resolve(undefined);
  }
  const body = JSON.stringify(data);
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<Product | undefined>(`${API_ENDPOINT}/products`, undefined, 'POST', body, headers);
}

export async function putProduct(data: any): Promise<Product | undefined> {
  if (!data) {
    return Promise.resolve(undefined);
  }
  const body = JSON.stringify(data);
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<Product | undefined>(`${API_ENDPOINT}/products`, undefined, 'PUT', body, headers);
}

export async function deleteProduct(id: string): Promise<Product | undefined> {
  if (!id) {
    return Promise.resolve(undefined);
  }
  return await FetchApi.fetchApiResponse<Product | undefined>(`${API_ENDPOINT}/products/${id}`, undefined, 'DELETE');
}
