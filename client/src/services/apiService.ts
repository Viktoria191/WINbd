import axios from 'axios';
import type { AddNewFormData, NewType } from '../types/new/new';

export const apiNewsService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/news',
});

class ApiService {
  static async getNews(): Promise<NewType[]> {
    const response = await apiNewsService.get<NewType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addNew(newFormData: AddNewFormData): Promise<NewType> {
    const response = await apiNewsService.post<NewType>('/', newFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding new'));
  }

  static async deleteNew(id: NewType['id']): Promise<NewType['id']> {
    const response = await apiNewsService.delete<NewType>(`/${id}`);
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error delete new'));
  }

  static async editNew(id: NewType['id'], newFormData: AddNewFormData): Promise<NewType> {
    try {
      const response = await apiNewsService.put<NewType>(`/${id}`, newFormData);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Failed to update new');
    } catch (error) {
      throw new Error('Server error edit new');
    }
  }
}

export default ApiService;
