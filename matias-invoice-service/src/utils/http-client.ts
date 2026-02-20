import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import logger from './logger';

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string, defaultHeaders?: Record<string, string>) {
    this.client = axios.create({
      baseURL,
      timeout: 30000, // 30 seconds
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...defaultHeaders,
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        logger.debug(`HTTP Request: ${config.method?.toUpperCase()} ${config.url}`, {
          data: config.data,
        });
        return config;
      },
      (error) => {
        logger.error('HTTP Request Error:', {
          message: error?.message,
          stack: error?.stack,
        });
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        logger.debug(`HTTP Response: ${response.status} ${response.config.url}`, {
          data: response.data,
        });
        return response;
      },
      (error: AxiosError) => {
        const meta = { url: error.config?.url, message: error.message, stack: error.stack };
        if (error.response) {
          logger.error(`HTTP Error Response: ${error.response.status}`, {
            ...meta,
            data: error.response.data,
            status: error.response.status,
          });
        } else if (error.request) {
          logger.error('HTTP Error: No response received', meta);
        } else {
          logger.error('HTTP Error:', meta);
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  setAuthToken(token: string): void {
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken(): void {
    delete this.client.defaults.headers.common['Authorization'];
  }

  getInstance(): AxiosInstance {
    return this.client;
  }
}

