import axios, { AxiosRequestConfig } from "axios";
export interface Response<T> {
  count: number;
  next: string | null
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then(res => res.data);


  get = (additionalEndpoint?: string, config?: AxiosRequestConfig) =>
    axiosInstance
      .get<T>(this.endpoint + additionalEndpoint || '', config)
      .then(res => res.data);
}

export default APIClient;
