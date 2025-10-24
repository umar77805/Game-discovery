import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";
import Utilities from "../services/utilities";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencyKeys?: any[]
) => {

  return useQuery<T[], Error>({
    queryKey: [...Utilities.getQueryKey(endpoint), ...(dependencyKeys || [])],
    queryFn: () => apiClient
      .get<Response<T>>(endpoint, {
        ...requestConfig,
      })
      .then((response) => response.data.results)
  })
};

export default useData;
